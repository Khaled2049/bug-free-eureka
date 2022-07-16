/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./src/context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Link: { // root type
    description: string; // String!
    id: number; // Int!
    url: string; // String!
  }
  Mutation: {};
  Query: {};
  User: { // root type
    email: string; // String!
    id: number; // Int!
    name: string; // String!
  }
  Wish: { // root type
    giftLink: string; // String!
    id: number; // Int!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Link: { // field return type
    description: string; // String!
    id: number; // Int!
    postedBy: NexusGenRootTypes['User'] | null; // User
    url: string; // String!
  }
  Mutation: { // field return type
    createWish: NexusGenRootTypes['Wish']; // Wish!
    post: NexusGenRootTypes['Link']; // Link!
  }
  Query: { // field return type
    feed: NexusGenRootTypes['Link'][]; // [Link!]!
    wish: NexusGenRootTypes['Wish'][]; // [Wish!]!
  }
  User: { // field return type
    email: string; // String!
    id: number; // Int!
    links: NexusGenRootTypes['Link'][]; // [Link!]!
    name: string; // String!
  }
  Wish: { // field return type
    giftLink: string; // String!
    id: number; // Int!
  }
}

export interface NexusGenFieldTypeNames {
  Link: { // field return type name
    description: 'String'
    id: 'Int'
    postedBy: 'User'
    url: 'String'
  }
  Mutation: { // field return type name
    createWish: 'Wish'
    post: 'Link'
  }
  Query: { // field return type name
    feed: 'Link'
    wish: 'Wish'
  }
  User: { // field return type name
    email: 'String'
    id: 'Int'
    links: 'Link'
    name: 'String'
  }
  Wish: { // field return type name
    giftLink: 'String'
    id: 'Int'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createWish: { // args
      giftLink: string; // String!
    }
    post: { // args
      description: string; // String!
      url: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}