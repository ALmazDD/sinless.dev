import {
  CircleF,
  GoogleMap,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";
import type { NextPage } from "next";
import { useMemo, useState } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { MainNavigation } from "@/components/main-nav";
import { Input } from "@/components/ui/input";

const GoogleApi: NextPage = () => {
  const [lat, setLat] = useState(51.09546);
  const [lng, setLng] = useState(71.437607);

  const libraries = useMemo(() => ["places"], []);
  const mapCenter = useMemo(() => ({ lat, lng }), [lat, lng]);

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <MainNavigation />

      <div className="m-auto mt-10 grid w-[60%] grid-cols-2 justify-end">
        <PlacesAutocomplete
          onAddressSelect={(address) => {
            getGeocode({ address }).then((results) => {
              const { lat, lng } = getLatLng(results[0]);
              setLat(lat);
              setLng(lng);
            });
          }}
        />
        <GoogleMap
          options={mapOptions}
          zoom={14}
          center={mapCenter}
          mapTypeId={google.maps.MapTypeId.ROADMAP}
          mapContainerStyle={{
            width: "800px",
            height: "800px",
            borderRadius: "80px",
          }}
          onLoad={(map) => console.log("Map Loaded")}
        >
          <MarkerF
            position={mapCenter}
            onLoad={() => console.log("Marker Loaded")}
          />

          {[250, 625].map((radius, idx) => {
            return (
              <CircleF
                key={idx}
                center={mapCenter}
                radius={radius}
                onLoad={() => console.log("Circle Load...")}
                options={{
                  fillColor: radius > 500 ? "orange" : "green",
                  strokeColor: radius > 500 ? "orange" : "green",
                  strokeOpacity: 0.8,
                }}
              />
            );
          })}
        </GoogleMap>
      </div>
    </>
  );
};

const PlacesAutocomplete = ({
  onAddressSelect,
}: {
  onAddressSelect?: (address: string) => void;
}) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: { componentRestrictions: { country: "us" } },
    debounce: 300,
    cache: 86400,
  });

  const renderSuggestions = () => {
    return data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
        description,
      } = suggestion;

      return (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        <li
          key={place_id}
          className="h-auto w-[70%] rounded-md border py-2 pl-3 hover:bg-slate-200"
          onClick={() => {
            setValue(description, false);
            clearSuggestions();
            onAddressSelect?.(description);
          }}
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });
  };

  return (
    <div>
      <Input
        className="w-[70%]"
        value={value}
        disabled={!ready}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter address"
      />

      {status === "OK" && <ul>{renderSuggestions()}</ul>}
    </div>
  );
};

export default GoogleApi;
