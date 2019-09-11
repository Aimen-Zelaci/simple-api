'use strict'

let dbm
let type
let seed

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
}

exports.up = function(db, callback) {
  //NEW SCHEMA
  return null;
}

exports.down = function(db) {
  //FALLBACK TO OLD SCHEMA
  db.dropTable('users', callback)
}

exports._meta = {
  "version": 1
}
