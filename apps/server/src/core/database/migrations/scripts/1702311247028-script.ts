import { MigrationInterface, QueryRunner } from 'typeorm'

export class Script1702311247028 implements MigrationInterface {
  name = 'Script1702311247028'

  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.query(
        `
        INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('aae6cee1-a02b-419c-8f82-0a3310b20d3e', '1Shaina.Beer@gmail.com', 'Alice Johnson', 'https://i.imgur.com/YfJQV5z.png?id=3', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('c7a8400e-9504-4eb6-a2b4-4502f3a47b7d', '7Abbey76@hotmail.com', 'Eva Green', 'https://i.imgur.com/YfJQV5z.png?id=9', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('c85ee652-6549-46b4-8427-f5df5e922b12', '13Lindsay30@hotmail.com', 'Eva Green', 'https://i.imgur.com/YfJQV5z.png?id=15', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('95b12e73-f184-42d0-9787-f318897203d3', '19Marcus71@hotmail.com', 'Alice Johnson', 'https://i.imgur.com/YfJQV5z.png?id=21', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('69833519-caa9-4179-aed8-f7eb2c5e22fd', '25Mac62@gmail.com', 'David Brown', 'https://i.imgur.com/YfJQV5z.png?id=27', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('2bc92725-0169-4cf3-ae2e-a220ea59e098', '31Lizzie.Satterfield@hotmail.com', 'Alice Johnson', 'https://i.imgur.com/YfJQV5z.png?id=33', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('bef94395-9cc2-4ea4-beee-37f2b36b31d3', '37Nichole_Wisozk11@yahoo.com', 'Cathy Lee', 'https://i.imgur.com/YfJQV5z.png?id=39', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('a5031a54-e8c1-40cb-acc7-3a09f4f97231', '43Vergie_Schuppe@yahoo.com', 'Cathy Lee', 'https://i.imgur.com/YfJQV5z.png?id=45', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('0bd29d1a-a20a-467b-8993-09e5183b33a9', '49Devon.Gorczany@hotmail.com', 'Cathy Lee', 'https://i.imgur.com/YfJQV5z.png?id=51', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('187482dd-9fa2-4a12-a288-771f1273c3b3', 'New Follower', 'Your post got a new like', 'Charlie Davis', '64Skye9@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=65', 'https://i.imgur.com/YfJQV5z.png?id=66', '0bd29d1a-a20a-467b-8993-09e5183b33a9');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('100ce560-bd51-498f-9e6c-710bd0ec4974', 'Like Notification', 'You have a new follower', 'Charlie Davis', '71Maiya46@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=72', 'https://i.imgur.com/YfJQV5z.png?id=73', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('48b25227-7e80-4412-a428-b5bedd1c07b4', 'Profile Visit', 'You have a new follower', 'Alice Johnson', '78Jesse.Kohler@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=79', 'https://i.imgur.com/YfJQV5z.png?id=80', '0bd29d1a-a20a-467b-8993-09e5183b33a9');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('5e9e53c0-5cff-42aa-bf8e-c9be6505157f', 'New Follower', 'Someone commented on your post', 'John Doe', '85Sigurd.Collins@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=86', 'https://i.imgur.com/YfJQV5z.png?id=87', 'aae6cee1-a02b-419c-8f82-0a3310b20d3e');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('731a7aaf-63a4-436e-8513-04f64b16d5aa', 'Photo Tag Alert', 'You were tagged in a photo', 'Charlie Davis', '92Vena_Jenkins49@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=93', 'https://i.imgur.com/YfJQV5z.png?id=94', 'c85ee652-6549-46b4-8427-f5df5e922b12');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('f458f4e9-0387-4392-9d0f-7fbc65ca5714', 'Photo Tag Alert', 'You were tagged in a photo', 'John Doe', '99Karina.Stracke76@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=100', 'https://i.imgur.com/YfJQV5z.png?id=101', 'a5031a54-e8c1-40cb-acc7-3a09f4f97231');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('083caf17-7700-4ab2-98ed-e2f6ed4016e0', 'Photo Tag Alert', 'Someone commented on your post', 'Charlie Davis', '106Donnell_Anderson@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=107', 'https://i.imgur.com/YfJQV5z.png?id=108', '69833519-caa9-4179-aed8-f7eb2c5e22fd');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('b5613d0f-df60-41df-ba6d-bea48b6b5222', 'New Follower', 'Someone commented on your post', 'Jane Smith', '113Bobbie.Miller@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=114', 'https://i.imgur.com/YfJQV5z.png?id=115', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('3aa2bee4-dc1f-4084-88c1-37179d4121bc', 'New Comment Alert', 'You were tagged in a photo', 'John Doe', '120Bradley.Lowe@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=121', 'https://i.imgur.com/YfJQV5z.png?id=122', '2bc92725-0169-4cf3-ae2e-a220ea59e098');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('36a5047b-656f-4d49-b74a-e7444650749e', 'New Comment Alert', 'Someone visited your profile', 'John Doe', '127Jordan.Zieme62@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=128', 'https://i.imgur.com/YfJQV5z.png?id=129', 'a5031a54-e8c1-40cb-acc7-3a09f4f97231');

INSERT INTO "post_data" ("id", "content", "imageUrl", "userId") VALUES ('0fd0bcdf-60b7-4ab2-b0a6-b07220555cf8', 'Cant believe I finally finished this massive puzzle', 'https://i.imgur.com/YfJQV5z.png?id=132', '0bd29d1a-a20a-467b-8993-09e5183b33a9');
INSERT INTO "post_data" ("id", "content", "imageUrl", "userId") VALUES ('dc92561f-d64e-4611-8314-4a01c7fbb2a7', 'What a beautiful day to start something new', 'https://i.imgur.com/YfJQV5z.png?id=135', '69833519-caa9-4179-aed8-f7eb2c5e22fd');
INSERT INTO "post_data" ("id", "content", "imageUrl", "userId") VALUES ('80327875-4ed2-4172-a271-193858b32c03', 'Feeling grateful for the little things in life. Blessed', 'https://i.imgur.com/YfJQV5z.png?id=138', 'c85ee652-6549-46b4-8427-f5df5e922b12');
INSERT INTO "post_data" ("id", "content", "imageUrl", "userId") VALUES ('4f63e68a-8869-4c00-ad74-f9f47bc1f2bc', 'Feeling grateful for the little things in life. Blessed', 'https://i.imgur.com/YfJQV5z.png?id=141', '95b12e73-f184-42d0-9787-f318897203d3');
INSERT INTO "post_data" ("id", "content", "imageUrl", "userId") VALUES ('16edc254-34bf-4363-9097-d64fed078623', 'Just made the best homemade pizza Recipe in comments.', 'https://i.imgur.com/YfJQV5z.png?id=144', 'bef94395-9cc2-4ea4-beee-37f2b36b31d3');
INSERT INTO "post_data" ("id", "content", "imageUrl", "userId") VALUES ('85d84d07-a8e6-401f-b7c8-5f011c1fec28', 'What a beautiful day to start something new', 'https://i.imgur.com/YfJQV5z.png?id=147', '0bd29d1a-a20a-467b-8993-09e5183b33a9');
INSERT INTO "post_data" ("id", "content", "imageUrl", "userId") VALUES ('6f367eff-2180-463c-811c-9a1edfe27bbd', 'Feeling grateful for the little things in life. Blessed', 'https://i.imgur.com/YfJQV5z.png?id=150', 'c85ee652-6549-46b4-8427-f5df5e922b12');
INSERT INTO "post_data" ("id", "content", "imageUrl", "userId") VALUES ('1c10f62a-dd82-4d23-8c98-42c5d5399635', 'What a beautiful day to start something new', 'https://i.imgur.com/YfJQV5z.png?id=153', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "post_data" ("id", "content", "imageUrl", "userId") VALUES ('e71a9783-24a1-41b9-a6c2-c18e6187b83f', 'Exploring the city lights tonight. Anyone else love urban photography', 'https://i.imgur.com/YfJQV5z.png?id=156', '69833519-caa9-4179-aed8-f7eb2c5e22fd');
INSERT INTO "post_data" ("id", "content", "imageUrl", "userId") VALUES ('26f57741-134c-4553-b200-a8f903763e8f', 'Just made the best homemade pizza Recipe in comments.', 'https://i.imgur.com/YfJQV5z.png?id=159', 'bef94395-9cc2-4ea4-beee-37f2b36b31d3');

INSERT INTO "comment" ("id", "text", "postId", "userId") VALUES ('c0b85c9e-005b-44bd-a8af-2dccf3bcd0f3', 'Love this picture', 'dc92561f-d64e-4611-8314-4a01c7fbb2a7', '2bc92725-0169-4cf3-ae2e-a220ea59e098');
INSERT INTO "comment" ("id", "text", "postId", "userId") VALUES ('3dbc664a-7f7e-4cd4-b6e6-23de60fc2f31', 'This is so inspiring ', 'dc92561f-d64e-4611-8314-4a01c7fbb2a7', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "comment" ("id", "text", "postId", "userId") VALUES ('b3bd8841-8387-48b8-9f74-ef87fdc36532', 'Absolutely stunning view thanks for sharing', '26f57741-134c-4553-b200-a8f903763e8f', 'a5031a54-e8c1-40cb-acc7-3a09f4f97231');
INSERT INTO "comment" ("id", "text", "postId", "userId") VALUES ('0d20c268-e265-4203-a8b5-2079af57c859', 'Love this picture', '85d84d07-a8e6-401f-b7c8-5f011c1fec28', '2bc92725-0169-4cf3-ae2e-a220ea59e098');
INSERT INTO "comment" ("id", "text", "postId", "userId") VALUES ('f4cd08e2-5b50-4178-95fb-20ea325f1efd', 'Cant believe this is real amazing capture', '0fd0bcdf-60b7-4ab2-b0a6-b07220555cf8', '95b12e73-f184-42d0-9787-f318897203d3');
INSERT INTO "comment" ("id", "text", "postId", "userId") VALUES ('1a676e22-2450-400d-b88a-ac0ba9206097', 'Love this picture', 'dc92561f-d64e-4611-8314-4a01c7fbb2a7', 'c7a8400e-9504-4eb6-a2b4-4502f3a47b7d');
INSERT INTO "comment" ("id", "text", "postId", "userId") VALUES ('36994e48-d23c-46ad-b28c-2774c1125b7c', 'Cant believe this is real amazing capture', 'e71a9783-24a1-41b9-a6c2-c18e6187b83f', 'bef94395-9cc2-4ea4-beee-37f2b36b31d3');
INSERT INTO "comment" ("id", "text", "postId", "userId") VALUES ('ae68a3b3-24d5-440c-b290-872c8d4b620a', 'What camera did you use for this shot', '4f63e68a-8869-4c00-ad74-f9f47bc1f2bc', 'aae6cee1-a02b-419c-8f82-0a3310b20d3e');
INSERT INTO "comment" ("id", "text", "postId", "userId") VALUES ('4de6b3e2-24e9-4603-a4e8-162f9d7f5ec4', 'This is so inspiring ', '80327875-4ed2-4172-a271-193858b32c03', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "comment" ("id", "text", "postId", "userId") VALUES ('67888857-2ebb-4d49-a0f5-97ee3e6aafa0', 'This is so inspiring ', 'dc92561f-d64e-4611-8314-4a01c7fbb2a7', 'c85ee652-6549-46b4-8427-f5df5e922b12');

INSERT INTO "like" ("id", "postId", "userId") VALUES ('774bd70c-4db2-4ee7-973c-feb055eb02b7', '16edc254-34bf-4363-9097-d64fed078623', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "like" ("id", "postId", "userId") VALUES ('2f53b525-3063-4a5b-81c7-e88ca4f03f82', '16edc254-34bf-4363-9097-d64fed078623', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "like" ("id", "postId", "userId") VALUES ('79bc7d01-ad94-4ca9-be7d-f10fe217b08d', '1c10f62a-dd82-4d23-8c98-42c5d5399635', 'a5031a54-e8c1-40cb-acc7-3a09f4f97231');
INSERT INTO "like" ("id", "postId", "userId") VALUES ('1f2bffa5-e392-4c78-961d-4993bd233565', '0fd0bcdf-60b7-4ab2-b0a6-b07220555cf8', 'aae6cee1-a02b-419c-8f82-0a3310b20d3e');
INSERT INTO "like" ("id", "postId", "userId") VALUES ('c74a31c3-a15a-4c90-ae62-36175779d753', '80327875-4ed2-4172-a271-193858b32c03', 'a5031a54-e8c1-40cb-acc7-3a09f4f97231');
INSERT INTO "like" ("id", "postId", "userId") VALUES ('f167fe30-fcaa-42fa-ab5c-d5592b1fe447', '16edc254-34bf-4363-9097-d64fed078623', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "like" ("id", "postId", "userId") VALUES ('0a738cab-2dd6-4f36-8da9-d607be7f0abf', 'e71a9783-24a1-41b9-a6c2-c18e6187b83f', '95b12e73-f184-42d0-9787-f318897203d3');
INSERT INTO "like" ("id", "postId", "userId") VALUES ('3b8e24a7-d7cd-41ed-89b8-52001ef2eb4e', '16edc254-34bf-4363-9097-d64fed078623', 'c85ee652-6549-46b4-8427-f5df5e922b12');
INSERT INTO "like" ("id", "postId", "userId") VALUES ('872e601a-d444-411e-91e7-e2131b7aa72c', '6f367eff-2180-463c-811c-9a1edfe27bbd', '0bd29d1a-a20a-467b-8993-09e5183b33a9');
INSERT INTO "like" ("id", "postId", "userId") VALUES ('60d0adbd-4260-492e-aa28-fe429bb134e0', 'e71a9783-24a1-41b9-a6c2-c18e6187b83f', 'c85ee652-6549-46b4-8427-f5df5e922b12');
    `,
      )
    } catch (error) {
      // ignore
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
