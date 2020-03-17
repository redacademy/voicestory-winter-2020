"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Video",
    embedded: false
  },
  {
    name: "Speaker",
    embedded: false
  },
  {
    name: "location",
    embedded: false
  },
  {
    name: "Event",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/ivandaixivwork/voicestory-2020/voicestory-2020-dev`
});
exports.prisma = new exports.Prisma();
