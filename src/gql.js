import { gql } from "apollo-boost";

export const meetupsQuery1 = gql`
  query AllMeetupsQuery($first: Int!) {
    allMeetups(first: $first) {
      id
      city
      name
    }
  }
`;

export const MEETUP_MUTATION = gql`
  mutation MeetupMutation($city: String!, $name: String!) {
    createMeetup(city: $city, name: $name) {
      id
      city
      name
    }
  }
`;

export const meetupsQuery2 = gql`
  query MeetupQuery {
    allMeetups(first: 2) {
      name
      city
      members {
        id
      }
    }
  }
`;

export const meetupsQuery3 = gql`
  query GetMeetup($id: Id!) {
    Meetup(id: $id) {
      city
      name
    }
  }
`;
