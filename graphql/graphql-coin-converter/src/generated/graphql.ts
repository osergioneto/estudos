import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type MaybePromise<T> = Promise<T> | T;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Exchange = {
  __typename?: 'Exchange',
  date: Scalars['String'],
  tariffDescription: Scalars['String'],
  real: Scalars['String'],
  dolar: Scalars['String'],
  euro: Scalars['String'],
};

export type Hello = {
  __typename?: 'Hello',
  message: Scalars['String'],
};

export type Mutation = {
  __typename?: 'Mutation',
  hello: Hello,
};

export type Query = {
  __typename?: 'Query',
  exchange?: Maybe<Exchange>,
};


export type QueryExchangeArgs = {
  url?: Maybe<Scalars['String']>
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: MaybePromise<{}>,
  String: MaybePromise<Scalars['String']>,
  Exchange: MaybePromise<Exchange>,
  Mutation: MaybePromise<{}>,
  Hello: MaybePromise<Hello>,
  Boolean: MaybePromise<Scalars['Boolean']>,
}>;

export type ExchangeResolvers<ContextType = any, ParentType = ResolversTypes['Exchange']> = ResolversObject<{
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  tariffDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  real?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  dolar?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  euro?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
}>;

export type HelloResolvers<ContextType = any, ParentType = ResolversTypes['Hello']> = ResolversObject<{
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
}>;

export type MutationResolvers<ContextType = any, ParentType = ResolversTypes['Mutation']> = ResolversObject<{
  hello?: Resolver<ResolversTypes['Hello'], ParentType, ContextType>,
}>;

export type QueryResolvers<ContextType = any, ParentType = ResolversTypes['Query']> = ResolversObject<{
  exchange?: Resolver<Maybe<ResolversTypes['Exchange']>, ParentType, ContextType, QueryExchangeArgs>,
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Exchange?: ExchangeResolvers<ContextType>,
  Hello?: HelloResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
