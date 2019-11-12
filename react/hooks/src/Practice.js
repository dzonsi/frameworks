import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
	const [isOnline, setIsOnline] = useState(null);

	useEffect(() => {
		function handleStatusChange(status) {
			setIsOnline(status.isOnline);
		}

		ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

		return () => {
			ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
		};
	});

	if (isOnline === null) {
		return "Loading...";
	}
	return isOnline ? "Online" : "Offline";
}

function FriendListItem(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}

// using a custom hook
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}

function FriendStatusCustom(props) {
	const isOnline = useFriendStatus(props.friend.id);

	if(isOnline === null) {
		return "Loading...";
	}
	return isOnline ? "Online" : "Offline";
}

function FriendListItemCustom(props) {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}