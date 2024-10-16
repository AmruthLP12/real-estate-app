'use client'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

const GoogleAddressSearch = () => {
  return (
    <div><GooglePlacesAutocomplete apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY} /></div>
  )
}

export default GoogleAddressSearch