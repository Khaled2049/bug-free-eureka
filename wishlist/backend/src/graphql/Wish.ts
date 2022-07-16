import { isCompositeType } from 'graphql';
import { extendType, nonNull, objectType, stringArg } from 'nexus';

export const Wish = objectType({
  name: 'Wish',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('description');
    t.nonNull.string('url');
  },
});

export const WishQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.nonNull.field('WishList', {
      type: 'Wish',
      resolve(parent, args, context) {
        return context.prisma.wish.findMany(); // 1
      },
    });
  },
});

export const WishMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('wish', {
      type: 'Wish',
      args: {
        description: nonNull(stringArg()),
        url: nonNull(stringArg()),
      },

      resolve(parent, args, context) {
        const newWish = context.prisma.wish.create({
          data: {
            description: args.description,
            url: args.url,
          },
        });
        return newWish;
      },
    });
  },
});
