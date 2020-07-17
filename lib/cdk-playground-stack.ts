import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as ecs from '@aws-cdk/aws-ecs';
import * as ecs_patterns from '@aws-cdk/aws-ecs-patterns';

export class CdkPlaygroundStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, 'CDKPlaygroundVPC');
    const cluster = new ecs.Cluster(this, 'CDKPlaygroundCluster', {vpc: vpc});
    const service = new ecs_patterns.ApplicationLoadBalancedFargateService(this, 
    'CDKPlaygroundService', {
      cluster: cluster,
      listenerPort: 4545,
      taskImageOptions: { 
        image: ecs.ContainerImage.fromAsset(__dirname + '/../main_service')
      }
    });

  }
}
