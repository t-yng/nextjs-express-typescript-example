import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../src/client/components/Button';

storiesOf('Button', module)
    .add('default', () => <Button type="default" />)
    .add('danger', () => <Button type="danger" />);
