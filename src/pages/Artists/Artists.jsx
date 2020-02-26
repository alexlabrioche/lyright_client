import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiRequest } from '../../actions/apiRequest';
import { ARTIST_DETAILS, ARTISTS, SONGS } from '../../actions/types';
import AppLayout from '../../layouts/AppLayout';
import SelectArtists from './components/SelectArtists';
import ArtistDetails from './components/ArtistDetails';
import SongsList from './components/SongsList';

function Artists() {
  const { artists, artistDetails, songsFromArtist, loading } = useSelector(
    state => state.api,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apiRequest(ARTISTS, '/artists'));
  }, []);

  useEffect(() => {
    const { id, name } = artistDetails;
    if (id) {
      dispatch(apiRequest(SONGS, `/artists/${id}/songs`));
    }
  }, [artistDetails]);

  function handleClick({ id }) {
    dispatch(apiRequest(ARTIST_DETAILS, `/artists/${id}`));
  }

  return (
    <AppLayout title={artistDetails.name || 'Artistes'}>
      <SelectArtists
        artists={artists}
        onClick={handleClick}
        artistName={artistDetails.name}
      />
      {!loading && artistDetails.id && <ArtistDetails {...artistDetails} />}
      <SongsList songs={songsFromArtist} />
    </AppLayout>
  );
}

export default Artists;
