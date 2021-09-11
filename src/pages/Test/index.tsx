import React from 'react';

interface IProps {
    text: string
}

export const Test: React.FunctionComponent<IProps> = ((props: IProps): any => {
    return <div>Hello</div>
})

export default Test;