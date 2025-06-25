import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class SimpleLambdaCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new lambda.Function(this, 'SimpleLambda', {
      runtime: lambda.Runtime.NODEJS18_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset('lambda'),
    });
  }
}
