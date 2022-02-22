import Api from "services/Api/Api";
import {orderIdFromUrl, orderNumbers, orderString} from "utils/helpers";
import {parsePlanetCard} from "pages/planets/actions";
import {parseStarshipCard} from "pages/starships/actions";
import {parsePeopleCard} from "pages/people/actions";
import {parseVehicleCard} from "pages/Vehicles/actions";
export const PLANETS_SCHEME = {
  title: "sections.planets",
  client:(params) => Api.planets.index(params),
  filters:{
    url: {
      label: 'filters.orderBy.default',
      value: 'url',
      default: true,
      orderFn: orderIdFromUrl,
    },
    name: {
      label: 'filters.orderBy.name',
      value: 'name',
      orderFn: orderString,
    },
    population: {
      label: 'filters.orderBy.population',
      value: 'population',
      orderFn: orderNumbers,
    }
  },
  cardParseFn:parsePlanetCard,
  imageEndpoint:'planets',
}
export const STARSHIPS_SCHEME = {
  title: "sections.starships",
  client:(params) => Api.starships.index(params),
  filters:{
    url: {
      label: 'filters.orderBy.default',
      value: 'url',
      default: true,
      orderFn: orderIdFromUrl,
    },
    cargo_capacity: {
      label: 'filters.orderBy.cargo',
      value: 'cargo_capacity',
      orderFn: orderNumbers,
    },
    crew: {
      label: 'filters.orderBy.crew',
      value: 'crew',
      orderFn: orderNumbers,
    },
  },
  cardParseFn:parseStarshipCard,
  imageEndpoint:'starships',

}
export const PEOPLE_SCHEME = {
  title: "sections.people",
  client:(params) => Api.people.index(params),
  filters:{
    url: {
      label: 'filters.orderBy.default',
      value: 'url',
      default: true,
      orderFn: orderIdFromUrl,
    },
    name: {
      label: 'filters.orderBy.name',
      value: 'name',
      orderFn: orderString,
    },
    mass: {
      label: 'filters.orderBy.mass',
      value: 'mass',
      orderFn: orderNumbers,
    }
  },
  cardParseFn:parsePeopleCard,
  imageEndpoint:'characters',

}
export const VEHICLES_SCHEME = {
  title: "sections.vehicles",
  client:(params) => Api.vehicles.index(params),
  filters:{
    url: {
      label: 'filters.orderBy.default',
      value: 'url',
      default: true,
      orderFn: orderIdFromUrl,
    },
    name: {
      label: 'filters.orderBy.name',
      value: 'name',
      orderFn: orderString,
    },
    passengers: {
      label: 'filters.orderBy.passengers',
      value: 'passengers',
      orderFn: orderNumbers,
    }
  },
  cardParseFn:parseVehicleCard,
  imageEndpoint:'vehicles',
}
