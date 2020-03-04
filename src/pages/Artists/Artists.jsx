import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiRequest } from '../../store/actions/apiRequest';
import {
  ARTIST_DETAILS,
  ARTISTS,
  SONGS,
  SONG_DETAILS,
} from '../../store/actions/types';
import { Flex } from 'rebass';
import AppLayout from '../../layouts/AppLayout';
import SelectArtist from '../../components/SelectArtist';
import ArtistDetails from './components/ArtistDetails';
import SongsList from './components/SongsList';
import SongDetails from './components/SongDetails';

function Artists() {
  const dispatch = useDispatch();
  const { loading } = useSelector(({ api }) => api);
  const {
    artistsList,
    artistDetails,
    songsFromArtist,
    songDetails,
  } = useSelector(({ artists }) => artists);

  useEffect(() => {
    dispatch(
      apiRequest(ARTISTS, {
        uri: '/artists',
        verb: 'get',
      }),
    );
  }, []);

  useEffect(() => {
    const { id } = artistDetails;
    id &&
      dispatch(
        apiRequest(SONGS, {
          uri: `/artists/${id}/songs`,
          verb: 'get',
        }),
      );
  }, [artistDetails]);

  function selectArtistFromList(id) {
    id &&
      dispatch(
        apiRequest(ARTIST_DETAILS, {
          uri: `/artists/${id}`,
          verb: 'get',
        }),
      );
  }

  function selectSong(id) {
    id &&
      dispatch(
        apiRequest(SONG_DETAILS, {
          uri: `/songs/${id}`,
          verb: 'get',
        }),
      );
  }

  return (
    <AppLayout title={artistDetails.name || 'Artistes'}>
      <Flex
        width={1}
        sx={{
          flexDirection: ['column', 'row'],
        }}
      >
        <SelectArtist
          artists={artistsList}
          onClick={selectArtistFromList}
          width={['100%', '30rem']}
          py={[2, 4]}
        />
      </Flex>
      {!loading && artistDetails.id && <ArtistDetails {...artistDetails} />}

      {songDetails.id ? (
        <SongDetails song={songDetails} />
      ) : (
        <SongsList songs={songsFromArtist} onClick={selectSong} />
      )}
    </AppLayout>
  );
}

export default Artists;
