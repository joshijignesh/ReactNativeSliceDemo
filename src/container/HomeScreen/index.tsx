import { View, Text, FlatList, RefreshControl, StatusBar } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { Api } from '../../services/Api';
import { User } from '../../services/modules/users/types';
import { useDispatch, useSelector } from 'react-redux';
import { addUsers, appendUserData } from '../../redux/slice/userSlice';
import EmptyView from '../../components/EmptyView';
import UserCard from '../../components/UserCard';
import { colors } from '../../theme/colors';

const HomeScreen = () => {

  //Custom Hook
  const dispatch = useDispatch()

  //State
  const [isRefreshing, setIsRefreshing] = useState(false);

  //Selector
  const users = useSelector((state: any) => state.users.users);

  /**
   * @function refreshData
   * This function is for fetching fresh data from API.
   */
  const refreshData = async () => {
    setIsRefreshing(true);
    Api.user.getUsers().then((response: any) => {
      setIsRefreshing(false);
      if (response.data && response.data.results) {
        dispatch(addUsers([]))
        dispatch(addUsers(response.data.results as User[]))
      }
    }).catch((err: any) => setIsRefreshing(false))
  }

  /**
 * @function appendData
 * This function is for getting data and append to exsiting array for pagination.
 */
  const appendData = async () => {
    setIsRefreshing(true);
    Api.user.getUsers().then((response: any) => {
      setIsRefreshing(false);
      if (response.data && response.data.results) {
        dispatch(appendUserData(response.data.results as User[]))
      }
    }).catch((err: any) => setIsRefreshing(false))
  }

  //Hook calls
  useEffect(() => {
    refreshData()
  }, [])

  const renderItem = ({ item }: { item: User }) => {
    return (<UserCard user={item} />)
  }

  const keyExtractor = (item: any, index: any) => index.toString()

  const handleRefresh = () => {
    refreshData()
  };

  return (
    <View>
      <StatusBar
        backgroundColor={colors.white}
        barStyle="dark-content"
      />
      <Header />
      <FlatList
        data={users}
        contentContainerStyle={{ marginTop: 16 }}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onEndReached={appendData}
        ListEmptyComponent={<EmptyView />}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
          />
        }
      />

    </View>
  );
};

export default HomeScreen;
