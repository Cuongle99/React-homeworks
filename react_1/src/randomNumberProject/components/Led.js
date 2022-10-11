import React, {useEffect} from 'react'

const Led = () => {
    useEffect(() => {
        console.log(1);
        return () => {
            console.log(2);
        };
    }, []);
  return (
    <div>Led</div>
  )
}

export default Led