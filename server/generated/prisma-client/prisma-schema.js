module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.23.0-test.3). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateSpeaker {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateVideo {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createSpeaker(data: SpeakerCreateInput!): Speaker!
  updateSpeaker(data: SpeakerUpdateInput!, where: SpeakerWhereUniqueInput!): Speaker
  updateManySpeakers(data: SpeakerUpdateManyMutationInput!, where: SpeakerWhereInput): BatchPayload!
  upsertSpeaker(where: SpeakerWhereUniqueInput!, create: SpeakerCreateInput!, update: SpeakerUpdateInput!): Speaker!
  deleteSpeaker(where: SpeakerWhereUniqueInput!): Speaker
  deleteManySpeakers(where: SpeakerWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createVideo(data: VideoCreateInput!): Video!
  updateVideo(data: VideoUpdateInput!, where: VideoWhereUniqueInput!): Video
  updateManyVideos(data: VideoUpdateManyMutationInput!, where: VideoWhereInput): BatchPayload!
  upsertVideo(where: VideoWhereUniqueInput!, create: VideoCreateInput!, update: VideoUpdateInput!): Video!
  deleteVideo(where: VideoWhereUniqueInput!): Video
  deleteManyVideos(where: VideoWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  speaker(where: SpeakerWhereUniqueInput!): Speaker
  speakers(where: SpeakerWhereInput, orderBy: SpeakerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Speaker]!
  speakersConnection(where: SpeakerWhereInput, orderBy: SpeakerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SpeakerConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  video(where: VideoWhereUniqueInput!): Video
  videos(where: VideoWhereInput, orderBy: VideoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Video]!
  videosConnection(where: VideoWhereInput, orderBy: VideoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VideoConnection!
  node(id: ID!): Node
}

type Speaker {
  id: ID!
  profile_picture: String
  social_medias: [String!]!
  titles: [String!]!
  description: String!
  videos(where: VideoWhereInput, orderBy: VideoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Video!]
}

type SpeakerConnection {
  pageInfo: PageInfo!
  edges: [SpeakerEdge]!
  aggregate: AggregateSpeaker!
}

input SpeakerCreateInput {
  id: ID
  profile_picture: String
  social_medias: SpeakerCreatesocial_mediasInput
  titles: SpeakerCreatetitlesInput
  description: String!
  videos: VideoCreateManyWithoutAuthorInput
}

input SpeakerCreateOneWithoutVideosInput {
  create: SpeakerCreateWithoutVideosInput
  connect: SpeakerWhereUniqueInput
}

input SpeakerCreatesocial_mediasInput {
  set: [String!]
}

input SpeakerCreatetitlesInput {
  set: [String!]
}

input SpeakerCreateWithoutVideosInput {
  id: ID
  profile_picture: String
  social_medias: SpeakerCreatesocial_mediasInput
  titles: SpeakerCreatetitlesInput
  description: String!
}

type SpeakerEdge {
  node: Speaker!
  cursor: String!
}

enum SpeakerOrderByInput {
  id_ASC
  id_DESC
  profile_picture_ASC
  profile_picture_DESC
  description_ASC
  description_DESC
}

type SpeakerPreviousValues {
  id: ID!
  profile_picture: String
  social_medias: [String!]!
  titles: [String!]!
  description: String!
}

type SpeakerSubscriptionPayload {
  mutation: MutationType!
  node: Speaker
  updatedFields: [String!]
  previousValues: SpeakerPreviousValues
}

input SpeakerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SpeakerWhereInput
  AND: [SpeakerSubscriptionWhereInput!]
  OR: [SpeakerSubscriptionWhereInput!]
  NOT: [SpeakerSubscriptionWhereInput!]
}

input SpeakerUpdateInput {
  profile_picture: String
  social_medias: SpeakerUpdatesocial_mediasInput
  titles: SpeakerUpdatetitlesInput
  description: String
  videos: VideoUpdateManyWithoutAuthorInput
}

input SpeakerUpdateManyMutationInput {
  profile_picture: String
  social_medias: SpeakerUpdatesocial_mediasInput
  titles: SpeakerUpdatetitlesInput
  description: String
}

input SpeakerUpdateOneWithoutVideosInput {
  create: SpeakerCreateWithoutVideosInput
  update: SpeakerUpdateWithoutVideosDataInput
  upsert: SpeakerUpsertWithoutVideosInput
  delete: Boolean
  disconnect: Boolean
  connect: SpeakerWhereUniqueInput
}

input SpeakerUpdatesocial_mediasInput {
  set: [String!]
}

input SpeakerUpdatetitlesInput {
  set: [String!]
}

input SpeakerUpdateWithoutVideosDataInput {
  profile_picture: String
  social_medias: SpeakerUpdatesocial_mediasInput
  titles: SpeakerUpdatetitlesInput
  description: String
}

input SpeakerUpsertWithoutVideosInput {
  update: SpeakerUpdateWithoutVideosDataInput!
  create: SpeakerCreateWithoutVideosInput!
}

input SpeakerWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  profile_picture: String
  profile_picture_not: String
  profile_picture_in: [String!]
  profile_picture_not_in: [String!]
  profile_picture_lt: String
  profile_picture_lte: String
  profile_picture_gt: String
  profile_picture_gte: String
  profile_picture_contains: String
  profile_picture_not_contains: String
  profile_picture_starts_with: String
  profile_picture_not_starts_with: String
  profile_picture_ends_with: String
  profile_picture_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  videos_every: VideoWhereInput
  videos_some: VideoWhereInput
  videos_none: VideoWhereInput
  AND: [SpeakerWhereInput!]
  OR: [SpeakerWhereInput!]
  NOT: [SpeakerWhereInput!]
}

input SpeakerWhereUniqueInput {
  id: ID
}

type Subscription {
  speaker(where: SpeakerSubscriptionWhereInput): SpeakerSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  video(where: VideoSubscriptionWhereInput): VideoSubscriptionPayload
}

type User {
  id: ID!
  email: String
  name: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  email: String
  name: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  name_ASC
  name_DESC
}

type UserPreviousValues {
  id: ID!
  email: String
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  name: String
}

input UserUpdateManyMutationInput {
  email: String
  name: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Video {
  id: ID!
  title: String!
  published: Boolean!
  author: Speaker
}

type VideoConnection {
  pageInfo: PageInfo!
  edges: [VideoEdge]!
  aggregate: AggregateVideo!
}

input VideoCreateInput {
  id: ID
  title: String!
  published: Boolean
  author: SpeakerCreateOneWithoutVideosInput
}

input VideoCreateManyWithoutAuthorInput {
  create: [VideoCreateWithoutAuthorInput!]
  connect: [VideoWhereUniqueInput!]
}

input VideoCreateWithoutAuthorInput {
  id: ID
  title: String!
  published: Boolean
}

type VideoEdge {
  node: Video!
  cursor: String!
}

enum VideoOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  published_ASC
  published_DESC
}

type VideoPreviousValues {
  id: ID!
  title: String!
  published: Boolean!
}

input VideoScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  published: Boolean
  published_not: Boolean
  AND: [VideoScalarWhereInput!]
  OR: [VideoScalarWhereInput!]
  NOT: [VideoScalarWhereInput!]
}

type VideoSubscriptionPayload {
  mutation: MutationType!
  node: Video
  updatedFields: [String!]
  previousValues: VideoPreviousValues
}

input VideoSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: VideoWhereInput
  AND: [VideoSubscriptionWhereInput!]
  OR: [VideoSubscriptionWhereInput!]
  NOT: [VideoSubscriptionWhereInput!]
}

input VideoUpdateInput {
  title: String
  published: Boolean
  author: SpeakerUpdateOneWithoutVideosInput
}

input VideoUpdateManyDataInput {
  title: String
  published: Boolean
}

input VideoUpdateManyMutationInput {
  title: String
  published: Boolean
}

input VideoUpdateManyWithoutAuthorInput {
  create: [VideoCreateWithoutAuthorInput!]
  delete: [VideoWhereUniqueInput!]
  connect: [VideoWhereUniqueInput!]
  set: [VideoWhereUniqueInput!]
  disconnect: [VideoWhereUniqueInput!]
  update: [VideoUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [VideoUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [VideoScalarWhereInput!]
  updateMany: [VideoUpdateManyWithWhereNestedInput!]
}

input VideoUpdateManyWithWhereNestedInput {
  where: VideoScalarWhereInput!
  data: VideoUpdateManyDataInput!
}

input VideoUpdateWithoutAuthorDataInput {
  title: String
  published: Boolean
}

input VideoUpdateWithWhereUniqueWithoutAuthorInput {
  where: VideoWhereUniqueInput!
  data: VideoUpdateWithoutAuthorDataInput!
}

input VideoUpsertWithWhereUniqueWithoutAuthorInput {
  where: VideoWhereUniqueInput!
  update: VideoUpdateWithoutAuthorDataInput!
  create: VideoCreateWithoutAuthorInput!
}

input VideoWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  published: Boolean
  published_not: Boolean
  author: SpeakerWhereInput
  AND: [VideoWhereInput!]
  OR: [VideoWhereInput!]
  NOT: [VideoWhereInput!]
}

input VideoWhereUniqueInput {
  id: ID
}
`
      }
    