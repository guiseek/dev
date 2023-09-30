#!/bin/bash

scope=$1
entity=$2

npx nx g @dev/plugin-layer:domain --name="${scope}-domain" --directory="${scope}/domain" --entity="${entity}" --projectNameAndRootFormat=as-provided --tags=type:domain,scope:"${scope}",side:both --testEnvironment=jsdom --bundler=tsc

npx nx g @dev/plugin-layer:data-source --name="${scope}-data-source" --domain="${scope}-domain" --directory="${scope}/data-source" --entity="${entity}" --projectNameAndRootFormat=as-provided --tags=type:data-source,scope:"${scope}",side:server --testEnvironment=node --bundler=tsc

npx nx g @dev/plugin-layer:data-access --name="${scope}-data-access" --domain="${scope}-domain" --directory="${scope}/data-access" --entity="${entity}" --projectNameAndRootFormat=as-provided --tags=type:data-access,scope:"${scope}",side:client --testEnvironment=jsdom --bundler=tsc

npx nx g @dev/plugin-layer:resource --name="${scope}-resource" --dataSource="${scope}-data-source" --directory="${scope}/resource" --entity="${entity}" --projectNameAndRootFormat=as-provided --tags=type:resource,scope:"${scope}",side:server

npx nx g @dev/plugin-layer:feature --name="${scope}-feature" --dataAccess="${scope}-data-access" --directory="${scope}/feature" --entity="${entity}" --projectNameAndRootFormat=as-provided --tags=type:feature,scope:"${scope}",side:client

