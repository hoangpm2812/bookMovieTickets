import { Image } from 'react-native';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMal from 'react-native-vector-icons/MaterialIcons';

const TabIcon = ({ selected, iconName }) => {
	var color = selected ? 'blue' : '#F29E2E';
	if(iconName == "Home")
	{
		return (
			<IconMal name="home" size={27} color='#0e61a9' />
		);
	}
	if(iconName == "Profile")
	{
		return (
			<Icon name="newspaper-o" size={25} color='#0e61a9' />
		);
	}
	if(iconName == "Job")
	{
		return (
			<Image
				style={{width : 20, height: 20}}
				source={require('../assets/images/icon_supervisor.png')}
			/>
		);
	}
	if(iconName == "Menu")
	{
		return (
			<IconMal name="menu" size={28} color='#0e61a9' />
		);
	}
};

export default {
	TabIcon
  };