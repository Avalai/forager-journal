import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Long: any;
  Time: any;
};








export type Finding = {
  __typename?: 'Finding';
  species?: Maybe<Species>;
  size: Size;
  _id: Scalars['ID'];
  producing?: Maybe<Scalars['Boolean']>;
  long: Scalars['Float'];
  notes?: Maybe<Scalars['String']>;
  harvests: HarvestPage;
  lat: Scalars['Float'];
  _ts: Scalars['Long'];
};


export type FindingHarvestsArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};

export type FindingHarvestsRelation = {
  create?: Maybe<Array<Maybe<HarvestInput>>>;
  connect?: Maybe<Array<Maybe<Scalars['ID']>>>;
  disconnect?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type FindingInput = {
  species?: Maybe<FindingSpeciesRelation>;
  size: Size;
  producing?: Maybe<Scalars['Boolean']>;
  lat: Scalars['Float'];
  long: Scalars['Float'];
  notes?: Maybe<Scalars['String']>;
  harvests?: Maybe<FindingHarvestsRelation>;
};

export type FindingPage = {
  __typename?: 'FindingPage';
  data: Array<Maybe<Finding>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

export type FindingSpeciesRelation = {
  create?: Maybe<SpeciesInput>;
  connect?: Maybe<Scalars['ID']>;
  disconnect?: Maybe<Scalars['Boolean']>;
};

export type Harvest = {
  __typename?: 'Harvest';
  _id: Scalars['ID'];
  _ts: Scalars['Long'];
  finding?: Maybe<Finding>;
  notes?: Maybe<Scalars['String']>;
};

export type HarvestFindingRelation = {
  create?: Maybe<FindingInput>;
  connect?: Maybe<Scalars['ID']>;
  disconnect?: Maybe<Scalars['Boolean']>;
};

export type HarvestInput = {
  finding?: Maybe<HarvestFindingRelation>;
  notes?: Maybe<Scalars['String']>;
};

export type HarvestPage = {
  __typename?: 'HarvestPage';
  data: Array<Maybe<Harvest>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type Mutation = {
  __typename?: 'Mutation';
  updateSpecies?: Maybe<Species>;
  deleteSpecies?: Maybe<Species>;
  updateFinding?: Maybe<Finding>;
  createFinding: Finding;
  deleteHarvest?: Maybe<Harvest>;
  createHarvest: Harvest;
  updateHarvest?: Maybe<Harvest>;
  createSpecies: Species;
  deleteFinding?: Maybe<Finding>;
};


export type MutationUpdateSpeciesArgs = {
  id: Scalars['ID'];
  data: SpeciesInput;
};


export type MutationDeleteSpeciesArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateFindingArgs = {
  id: Scalars['ID'];
  data: FindingInput;
};


export type MutationCreateFindingArgs = {
  data: FindingInput;
};


export type MutationDeleteHarvestArgs = {
  id: Scalars['ID'];
};


export type MutationCreateHarvestArgs = {
  data: HarvestInput;
};


export type MutationUpdateHarvestArgs = {
  id: Scalars['ID'];
  data: HarvestInput;
};


export type MutationCreateSpeciesArgs = {
  data: SpeciesInput;
};


export type MutationDeleteFindingArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  species: SpeciesPage;
  findSpeciesByID?: Maybe<Species>;
  findings: FindingPage;
  findHarvestByID?: Maybe<Harvest>;
  harvests: HarvestPage;
  findFindingByID?: Maybe<Finding>;
};


export type QuerySpeciesArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type QueryFindSpeciesByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindingsArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type QueryFindHarvestByIdArgs = {
  id: Scalars['ID'];
};


export type QueryHarvestsArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type QueryFindFindingByIdArgs = {
  id: Scalars['ID'];
};

export enum Size {
  Xs = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
  Xl = 'XL'
}

export type Species = {
  __typename?: 'Species';
  name: Scalars['String'];
  _id: Scalars['ID'];
  icon: Scalars['String'];
  edible?: Maybe<Scalars['Boolean']>;
  scientificName?: Maybe<Scalars['String']>;
  findings: FindingPage;
  produces?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  _ts: Scalars['Long'];
};


export type SpeciesFindingsArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};

export type SpeciesFindingsRelation = {
  create?: Maybe<Array<Maybe<FindingInput>>>;
  connect?: Maybe<Array<Maybe<Scalars['ID']>>>;
  disconnect?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type SpeciesInput = {
  name: Scalars['String'];
  scientificName?: Maybe<Scalars['String']>;
  edible?: Maybe<Scalars['Boolean']>;
  produces?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  icon: Scalars['String'];
  findings?: Maybe<SpeciesFindingsRelation>;
};

export type SpeciesPage = {
  __typename?: 'SpeciesPage';
  data: Array<Maybe<Species>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};



