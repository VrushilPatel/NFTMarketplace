"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = require("next/link");
var react_1 = require("@chakra-ui/react");
var Home = function () {
    return (<react_1.Container maxW={"1200px"}>
      <react_1.Flex h={"80vh"} alignItems={"center"} justifyContent={"center"}>
        <react_1.Stack spacing={4} align={"center"}>
          <react_1.Heading>Marketplace</react_1.Heading>
          <react_1.Button as={link_1.default} href='/buy'>Shop NFTs</react_1.Button>
        </react_1.Stack>
      </react_1.Flex>
    </react_1.Container>);
};
exports.default = Home;
