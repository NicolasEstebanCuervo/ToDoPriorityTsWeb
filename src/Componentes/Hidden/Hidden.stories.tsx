import Hidden from '.';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Hidden',
  component: Hidden,
};

const Template = (args : {className?:string}) => (
  <Hidden {...args} onClick={action('Se abrió el formulario')} />
);

export const Default = Template.bind({});

export const HoverActive = () => <Template className="hover"/>

