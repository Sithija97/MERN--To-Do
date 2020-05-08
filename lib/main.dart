import 'dart:io';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/material.dart';
import 'package:to_do_app/Dash.dart';
import 'package:to_do_app/Home.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:to_do_app/Welcome.dart';


void main() {
  FlutterError.onError = (FlutterErrorDetails details) {
    FlutterError.dumpErrorToConsole(details);
    if (kReleaseMode)
      exit(1);
  };
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'My To~Do App',
      theme: ThemeData(
        primarySwatch:Colors.blue,
        //fontFamily: "Ubuntu",
      ),
      home: Welcome()
    );
  }
}

