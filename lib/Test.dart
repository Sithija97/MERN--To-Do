import 'package:flutter/material.dart';
import 'package:to_do_app/Dash.dart';

class Test extends StatefulWidget {
  @override
  _TestState createState() => _TestState();
}

class _TestState extends State<Test> {
  void navigateNext(){
    Navigator.push(context, MaterialPageRoute(builder: (context)=>Dash()));
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(appBar: AppBar(
        title: Text('My To~Do App'),
        centerTitle: true,
        backgroundColor: Colors.greenAccent[700],
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: navigateNext,
        child: Icon(Icons.navigation),
        backgroundColor: Colors.blue[900]),
        body:Container(
        child:Center(
          child:Text("Hello")
        )
      ),
    );
  }
}
