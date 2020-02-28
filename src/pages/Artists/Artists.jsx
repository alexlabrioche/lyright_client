import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiRequest } from '../../actions/apiRequest';
import {
  ARTIST_DETAILS,
  ARTISTS,
  SONGS,
  SONG_DETAILS,
} from '../../actions/types';
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
    dispatch(apiRequest(ARTISTS, '/artists'));
  }, []);

  useEffect(() => {
    const { id } = artistDetails;
    id && dispatch(apiRequest(SONGS, `/artists/${id}/songs`));
  }, [artistDetails]);

  function selectArtistFromList(id) {
    id && dispatch(apiRequest(ARTIST_DETAILS, `/artists/${id}`));
  }

  function selectSong(id) {
    id && dispatch(apiRequest(SONG_DETAILS, `/songs/${id}`));
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
