import QuranKemenag from 'quran-kemenag';
import {Verse} from 'quran-kemenag/dist/intefaces';
import React from 'react';
import {FlatList, SafeAreaView, Text} from 'react-native';
import {
  Box,
  Circle,
  Col,
  Gap,
  ImgIcon,
  Line,
  Padder,
  Row,
  ScaledText,
} from 'urip-rn-kit';
import Icons from '../assets/icons';
import Images from '../assets/images';
import Colors from '../constants/color.constant';

interface DetailScreenProps {
  navigation: any;
  route: any;
}

const DetailScreen = (props: DetailScreenProps) => {

  const [surah, setSurah]: [surah: any, setSurah: any] = React.useState(null);
  const [verses, setVerses]: [verses: any[], setVerses: any] = React.useState(
    [],
  );

  React.useEffect(() => {
    const {surahNumber} = props.route.params;
    getData(surahNumber);
  }, []);

  const getData = async (surah_id: number) => {
    const quran = new QuranKemenag();
    const data = await quran.getSurah(surah_id);
    setSurah(data);
    setVerses(data.verses || []);
  };

  return (
    <SafeAreaView style={{backgroundColor: Colors.white,paddingTop:20}}>
      <Padder horizontal={20}>
        <Box
          justifyCenter
          alignCenter
          borderRadius={10}
          height={100}
          fullWidth
          backgroundImage={Images.bg}>
          <ScaledText color={Colors.white} size={20} bold>
            {surah ? surah.surah_name : ''}
          </ScaledText>
          <ScaledText color={Colors.white} size={13}>
            {surah ? `${surah.surah_verse_count} VERSES` : ''}
          </ScaledText>
        </Box>
      </Padder>
      <Gap size={20} vertical />
      <FlatList
        data={verses}
        keyExtractor={v => v.verse_id}
        renderItem={({item, index}) => {
          return <VerseItem key={index} data={item} />;
        }}
        ListFooterComponent={<Gap vertical size={200} />}
      />
    </SafeAreaView>
  );
};

interface VerseItemProps {
  data: Verse;
}

const VerseItem = (props: VerseItemProps) => {
  return (
    <Padder horizontal>
      <Col>
        <Row>
          <Col>
            <Padder horizontal>
              <Box borderRadius={10} fullWidth color={Colors.grey3} height={45}>
                <Row>
                  <Col size={3} justifyCenter>
                    <Padder horizontal>
                      <Circle size={30} color={Colors.purple1}>
                        <ScaledText color={Colors.white}>
                          {props.data.verse_number}
                        </ScaledText>
                      </Circle>
                    </Padder>
                  </Col>
                  <Col justifyCenter>
                    <Row alignCenter justifyEnd>
                      <Gap />
                    </Row>
                  </Col>
                </Row>
              </Box>
            </Padder>
          </Col>
        </Row>
        <Row justifyEnd>
          <Padder all>
            <ScaledText size={22}>{props.data.verse_arabic}</ScaledText>
          </Padder>
        </Row>

        <Gap vertical />
        <Line />
        <Gap vertical />
      </Col>
    </Padder>
  );
};

export default DetailScreen;
