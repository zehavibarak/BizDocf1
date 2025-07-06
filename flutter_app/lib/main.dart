import 'package:bizdoc/bizdoc_app.dart';
import 'package:bizdoc/authenticate/form_identity.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return BizDocApp(
      authentication: FormIdentity(),
      serverAddress: 'https://10.0.2.2:4200/',
      // resolve: {},
    );
  }
}
