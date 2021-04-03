/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_GAME_RATING } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryGamesBySlug
// ====================================================

export interface QueryGamesBySlug_games_categories {
  __typename: "Category";
  name: string;
}

export interface QueryGamesBySlug_games_gallery {
  __typename: "UploadFile";
  src: string;
  label: string | null;
}

export interface QueryGamesBySlug_games_cover {
  __typename: "UploadFile";
  src: string;
}

export interface QueryGamesBySlug_games_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryGamesBySlug_games_publisher {
  __typename: "Publisher";
  name: string;
}

export interface QueryGamesBySlug_games_platforms {
  __typename: "Platform";
  name: string;
}

export interface QueryGamesBySlug_games {
  __typename: "Game";
  name: string;
  short_description: string;
  description: string;
  price: number;
  rating: ENUM_GAME_RATING | null;
  release_date: any | null;
  categories: QueryGamesBySlug_games_categories[];
  gallery: QueryGamesBySlug_games_gallery[];
  cover: QueryGamesBySlug_games_cover | null;
  developers: QueryGamesBySlug_games_developers[];
  publisher: QueryGamesBySlug_games_publisher | null;
  platforms: QueryGamesBySlug_games_platforms[];
}

export interface QueryGamesBySlug {
  games: QueryGamesBySlug_games[];
}

export interface QueryGamesBySlugVariables {
  slug: string;
}
