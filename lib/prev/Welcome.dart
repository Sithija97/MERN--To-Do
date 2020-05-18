import 'package:flutter/material.dart';
import 'package:flutter_progress_button/flutter_progress_button.dart';
import 'const.dart';

class Welcome extends StatefulWidget {
  @override
  _WelcomeState createState() => _WelcomeState();
}

class _WelcomeState extends State<Welcome> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        width: MediaQuery.of(context).size.width,
        height: MediaQuery.of(context).size.height,
        decoration: BoxDecoration(
            gradient: LinearGradient(
          colors: [
            AppColors.mainColor,
            AppColors.mainColor.withOpacity(.3),
          ],
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
        )),
        child: Stack(children: <Widget>[
          buildHeader(),
          Align(
            alignment: Alignment.center,
            child: Container(
              width: MediaQuery.of(context).size.width * .75,
              //child: Image.asset("assets/images/undraw_add_tasks_mxew.png"),
            ),
          ),

          
          buildFooter(context)
        ]),
      ),
    );
  }
}

Widget buildHeader() {
  return Padding(
    padding: const EdgeInsets.only(top: 50),
    child: Align(
      alignment: Alignment.topCenter,
      //child: Image.asset("assets/images/logo.png"),
    ),
  );
}

Widget buildFooter(BuildContext context) {
  void navigateNext() {
    //Navigator.push(context, MaterialPageRoute(builder: (context) => Dash()));
  }

  return Positioned(
      bottom: 50,
      child: Container(
          width: MediaQuery.of(context).size.width,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              Text(
                "Coronavirus disease (COVID19)",
                style: TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 24,
                    color: Colors.white,
                    height: 1.5),
              ),
              Text(
                "is an Infectianus disease caused by a new\nvirus",
                style:
                    TextStyle(fontSize: 16, color: Colors.white, height: 1.5),
                textAlign: TextAlign.center,
              ),
              SizedBox(
                height: 25,
              ),
              ProgressButton(
                defaultWidget: const Text(
                  'Get Started',
                  style: TextStyle(),
                ),
                progressWidget: const CircularProgressIndicator(),
                width: 240,
                height: 50,
                onPressed: navigateNext,
                color: Colors.white,
                animate: true,
                borderRadius: 30,
              )
            ],
          )));
}
