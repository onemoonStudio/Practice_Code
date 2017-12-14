import React from 'react';

const VideoListItem = ({video}) => {
    // const video = props.video; 
    // 상단에 인자에 {video} 대신에 props가 있어야 한다
    // ES6 문법 인자에 {video} 와 같이 작성을 해 놓는다면 바로 확인할 수가 있다.
    console.log(video);


    return <li>Video</li>;
};

export default VideoListItem;