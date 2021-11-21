import '@aws-cdk/assert/jest';
import { Stack } from '@aws-cdk/core';

import { VerdaccioService } from '../src';

test('VerdaccioService', () => {
  // GIVEN
  const stack = new Stack();

  // WHEN
  new VerdaccioService(stack, 'UmamiAnalytics', {
    verdaccioConfig: {
      storage: '/verdaccio/storage',
      auth: {
        htpasswd: {
          file: '/verdaccio/conf/htpasswd',
        },
      },
      uplinks: {
        npmjs: {
          url: 'https://registry.npmjs.org/',
          cache: false,
        },
      },
      packages: {
        '@*': {
          access: '$authenticated',
          publish: '$authenticated',
        },
        '**': {
          access: '$all',
          publish: '$authenticated',
          proxy: 'npmjs',
        },
      },
      web: {
        enable: true,
      },
      logs: [
        { type: 'stdout', format: 'pretty', level: 'http' },
      ],
    },
  });

  // THEN
  expect(stack).toHaveResource('AWS::EC2::VPC');
});