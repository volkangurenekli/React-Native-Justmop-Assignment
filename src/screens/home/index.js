/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, FlatList} from 'react-native';
import {Container} from 'native-base';
import XCard from '../../components/XCard';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as justmopActions from '../../redux/actions/justmopActions';

const Home = props => {
  useEffect(() => {
    props.actions.getData();
  }, []);

  const onPress = item => {
    props.actions.selectedData(item);
    props.navigation.navigate('Detail');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Container>
        <FlatList
          data={props.mechanics}
          renderItem={({item}) => (
            <XCard onPress={() => onPress(item)} title={item} />
          )}
          keyExtractor={() => Math.random().toString(16)}
        />
      </Container>
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    allData: state.getData,
    mechanics: state.mechanics,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      getData: bindActionCreators(justmopActions.getData, dispatch),
      selectedData: bindActionCreators(justmopActions.selectedData, dispatch),
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
