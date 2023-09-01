import {View, FlatList, StatusBar} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import { colors } from '../../theme/colors';
import EmptyView from '../../components/EmptyView';
import { useSelector } from 'react-redux';
import UserCard from '../../components/UserCard';
import { User } from '../../services/modules/users/types';

const FavoriteScreen = () => {
  
  //Selectors
  const favourite = useSelector((state: any) => state.users.favourite);

  /**
   * @function renderItem 
   * @returns UserCard view with users values.
   */
  const renderItem = ({ item }: { item: User }) =>{
    return (<UserCard user={item} isFavourit={true} />)
    }
  
  //keyExtractor For flatList
  const keyExtractor = (item:any, index: any) => index.toString()

  return (
    <View>
       <StatusBar
        backgroundColor={colors.white}
        barStyle="dark-content"
      />
       <Header />
       <FlatList
        data={favourite}
        contentContainerStyle={{marginTop: 16}}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListEmptyComponent={<EmptyView />}
      />
    </View>
  );
};

export default FavoriteScreen;
