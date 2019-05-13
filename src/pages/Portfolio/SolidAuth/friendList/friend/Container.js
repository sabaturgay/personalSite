import Friend from "./Friend";
import LoadingFriend from "./LoadingFriend";
import React from "react";

export default ({webId, name, imageSrc, pending}) => (
    pending ?
        <LoadingFriend webId={`${webId}`}/> :
        <Friend
            webId={`${webId}`}
            name={`${name}`}
            imageSrc={imageSrc ? `${imageSrc}` : undefined}
        />
);