import { TailSpin } from 'react-loader-spinner';
import classes from './styles.module.scss';

export function Loading() { 
  return (
    <TailSpin
      visible={true}
      height="80"
      width="80"
      radius="5"
      color="#E81684"
      ariaLabel="loading"
      wrapperStyle={{}}
      wrapperClass={classes.loading}
    />      
  );
}