import React from 'react';

const VideoListItem = ({video , onClickVideo}) => {
    // const video = props.video; 
    // 상단에 인자에 {video} 대신에 props가 있어야 한다
    // ES6 문법 인자에 {video} 와 같이 작성을 해 놓는다면 바로 확인할 수가 있다.
    // console.log(video);

    const imgUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick = {() => onClickVideo(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img classnName="media-object" src={imgUrl} />
                </div>

                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;