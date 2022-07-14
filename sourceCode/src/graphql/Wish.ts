import { extendType, nonNull, objectType, stringArg } from 'nexus';
import { Link } from './Link';
import { NexusGenObjects } from '../../nexus-typegen';

export const Wish = objectType({
  name: 'Wish',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('giftLink');
  },
});

let wish_list: NexusGenObjects['Wish'][] = [
  {
    id: 1,
    giftLink: 'test1',
  },
  {
    id: 2,
    giftLink: 'test2',
  },
];

export const WishQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.nonNull.field('wish', {
      type: 'Wish',
      resolve(parent, args, context, info) {
        return wish_list;
      },
    });
  },
});

export const WishMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createWish', {
      type: 'Wish',
      args: {
        giftLink: nonNull(stringArg()),
      },

      resolve(parent, args, context) {
        const { giftLink } = args;
        let idCount = wish_list.length + 1;
        const wish = {
          id: idCount,
          giftLink,
        };
        wish_list.push(wish);
        return wish;
      },
    });
  },
});
