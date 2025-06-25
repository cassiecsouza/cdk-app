#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { SimpleLambdaCdkStack } from '../lib/lambda-cdk-stack';

const app = new cdk.App();
new SimpleLambdaCdkStack(app, 'SimpleLambdaCdkStack');
