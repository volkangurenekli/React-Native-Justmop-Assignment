/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, FlatList} from 'react-native';
import {Container} from 'native-base';
import DetailedCard from '../../components/DetailedCard';
import {connect} from 'react-redux';

const Detail = props => {
  const [list, setList] = useState([]);

  useEffect(() => {
    props.navigation.setOptions({title: props.selectedData});
    props.allData.map(data =>
      data.mechanics && data.mechanics.length > 0 ? search(data) : null,
    );
  }, []);

  const search = data => {
    data.mechanics.map(item =>
      item.name === props.selectedData ? pushList(data) : null,
    );
  };

  const pushList = data => {
    let tempList = list;
    tempList.push(data);
    setList(tempList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Container>
        <FlatList
          data={list}
          renderItem={({item}) => <DetailedCard data={item} />}
          keyExtractor={() => Math.random().toString(16)}
        />
      </Container>
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    allData: state.getData,
    selectedData: state.selectedData,
  };
};

export default connect(mapStateToProps)(Detail);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
