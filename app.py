#!/usr/bin/env python3

import aws_cdk as cdk

from simple_lambda_cdk.simple_lambda_cdk_stack import SimpleLambdaCdkStack

app = cdk.App()
SimpleLambdaCdkStack(app, "SimpleLambdaCdkStack")
