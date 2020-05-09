import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';

class Dash extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Dash> {
  String input = "";

  createToDos() {
    DocumentReference documentReference =
        Firestore.instance.collection("MyTodos").document(input);
    //Mapping
    Map<String, String> todos = {"todoTitle": input};
    documentReference.setData(todos).whenComplete(() {
      print("$input created");
    });
  }

  deleteToDos(item) {
    DocumentReference documentReference =
        Firestore.instance.collection("MyTodos").document(item);

    documentReference.delete().whenComplete(() {
      print("deleted");
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading:
            IconButton(icon: Icon(Icons.menu), onPressed: () {}), //drawerIcon
        title: Text('My To~Do '),
        centerTitle: true,
        backgroundColor: Colors.blue[200],
      ),
      floatingActionButton: FloatingActionButton(
        backgroundColor: Colors.blue[900],
        onPressed: () {
          showDialog(
            context: context,
            builder: (BuildContext context) {
              return AlertDialog(
                title: Text("Add TodoList"),
                shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(8)),
                content: TextField(onChanged: (String value) {
                  input = value;
                }),
                actions: <Widget>[
                  FlatButton(
                      color: Colors.blue[900],
                      onPressed: () {
                        createToDos();
                        Navigator.of(context).pop();
                      },
                      child: Text("Add")),
                ],
              );
            },
          );
        },
        child: Icon(Icons.add, color: Colors.white),
      ),
      body: StreamBuilder(
          stream: Firestore.instance.collection("MyTodos").snapshots(),
          builder: (context, snapshots) {
            if (snapshots.data != null) {
              return ListView.builder(
                  shrinkWrap: true,
                  itemCount: snapshots.data.documents.length,
                  itemBuilder: (context, index) {
                    DocumentSnapshot documentSnapshot =
                        snapshots.data.documents[index];
                    return Dismissible(
                        onDismissed: (direction) {
                          deleteToDos(documentSnapshot["todoTitle"]);
                        },
                        key: Key(documentSnapshot["todoTitle"]),
                        child: Card(
                          elevation: 4,
                          margin: EdgeInsets.all(6),
                          shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(16)),
                          child: ListTile(
                            title: Text(documentSnapshot["todoTitle"]),
                            trailing: IconButton(
                                icon: Icon(Icons.delete),
                                color: Colors.blue[900],
                                onPressed: () {
                                  deleteToDos(documentSnapshot["todoTitle"]);
                                }),
                          ),
                        ));
                  });
            } else {
              return Text("Loading..");
            }
          }),
    );
  }
}
