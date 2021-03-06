import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';
import { pick } from 'lodash/fp';

import { Branches } from './branchCollection';

const branchNew = (options) => {
  check(options, {
    name: Match.Maybe(String),
  });
  return Branches.insert({ ...options });
};

const branchSave = (branchId, options) => {
  check(branchId, String);
  check(options, {
    _id: Match.Maybe(String),
    name: Match.Maybe(String),
    code: Match.Maybe(String),
    references: Match.Maybe(Array),
  });
  const update = { $set: pick(['name', 'code'], options) };
  Branches.update({ _id: branchId }, update);
};

export const branchNextReference = (branchId) => {
  check(branchId, String);
  const branch = Branches.findOne(branchId);
  if (!branch) {
    throw new Error(`${branchId} is not a valid branch id.`);
  }
  const code = branch.code || '';
  const references = branch.references || [];
  const num = references.length + 1;
  return code + (`000000${num}`).slice(-6);
};

Meteor.methods({
  'branch.new': branchNew,
  'branch.save': branchSave,
  'branch.nextReference': branchNextReference,
});
