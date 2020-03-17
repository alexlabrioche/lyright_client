import React, { useMemo } from 'react';
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

  console.log('artistDetails', artistDetails);
  useMemo(() => {
    dispatch(
      apiRequest(ARTISTS, {
        uri: '/artists',
        verb: 'get',
      }),
    );
  }, [dispatch]);

  React.useEffect(() => {
    const { id } = artistDetails;
    id &&
      dispatch(
        apiRequest(SONGS, {
          uri: `/artists/${id}/songs`,
          verb: 'get',
        }),
      );
  }, [dispatch, artistDetails]);

  function handleArtist(event) {
    const id = event.target.value;
    console.log('event.target.name', event.target.name);
    dispatch(
      apiRequest(ARTIST_DETAILS, {
        uri: `/artists/${id}`,
        verb: 'get',
      }),
    );
  }

  function handleSong(id) {
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
          handleArtist={handleArtist}
          width={['100%', '30rem']}
          py={[2, 4]}
        />
      </Flex>
      {!loading && artistDetails.id && <ArtistDetails {...artistDetails} />}

      {songDetails.id ? (
        <SongDetails song={songDetails} />
      ) : (
        <SongsList songs={songsFromArtist} handleSong={handleSong} />
      )}
    </AppLayout>
  );
}

export default Artists;
