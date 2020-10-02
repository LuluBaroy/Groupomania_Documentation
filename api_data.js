define({ "api": [
  {
    "type": "post",
    "url": "/api/posts/:id/comments",
    "title": "Create",
    "name": "Create",
    "group": "Comments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "PostId",
            "description": "<p>id(unique)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Object",
            "description": "<p>Message + new comment info</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n\t\"message\":\"Your comment has been sent !\",\n\t\"comment\":{\n\t\t\"id\":28,\n\t\t\"comment\":\"123\",\n\t\t\"UserId\":3,\n\t\t\"PostId\":\"17\",\n\t\t\"updatedAt\":\"2020-10-01T12:29:47.681Z\",\n\t\t\"createdAt\":\"2020-10-01T12:29:47.681Z\"\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response : User not authenticated",
          "content": "HTTP/1.1 400 Bad Request\n{\n \t\"message\": \"You're not authenticated, please log in !\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/comments.js",
    "groupTitle": "Comments"
  },
  {
    "type": "post",
    "url": "/api/posts/:id/:comment_id/report",
    "title": "Create Comment Report",
    "name": "CreateCommentReport",
    "group": "Comments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "PostId",
            "description": "<p>id(unique)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "CommentId",
            "description": "<p>id(unique)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Object",
            "description": "<p>Message + new comment report info</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n\t\"message\":\"Your report has been sent, we'll eventually contact you if we need more information !\",\n\t\"report\":{\n\t\t\"id\":10,\n\t\t\"CommentId\":\"28\",\n\t\t\"PostId\":\"17\",\n\t\t\"UserId\":3,\n\t\t\"report\":\"123456\",\n\t\t\"status\":\"pending\",\n\t\t\"updatedAt\":\"2020-10-01T12:35:17.926Z\",\n\t\t\"createdAt\":\"2020-10-01T12:35:17.926Z\"\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response : User not authenticated",
          "content": "HTTP/1.1 400 Bad Request\n{\n \t\"message\": \"You're not authenticated, please log in !\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/comments.js",
    "groupTitle": "Comments"
  },
  {
    "type": "delete",
    "url": "/api/posts/:id/:comment_id",
    "title": "Delete",
    "name": "Delete",
    "group": "Comments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "PostId",
            "description": "<p>id(unique)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "CommentId",
            "description": "<p>id(unique)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Message",
            "description": "<p>Message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"message\":\"Comment has been deleted !\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response : User not allowed for this action",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"message\": \"You're not allowed to delete this comment\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/comments.js",
    "groupTitle": "Comments"
  },
  {
    "type": "get",
    "url": "/api/posts/:id/:comment_id",
    "title": "Read One",
    "name": "ReadOne",
    "group": "Comments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "PostId",
            "description": "<p>id(unique)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "CommentId",
            "description": "<p>id(unique)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Object",
            "description": "<p>Comment info</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"id\":29,\n\t\"comment\":\"123456\",\n\t\"user_id\":3,\n\t\"post_id\":17,\n\t\"created_at\":\"2020-10-01 14:44:01\",\n\t\"updated_at\":\"2020-10-01 14:44:01\",\n\t\"createdAt\":\"2020-10-01 14:44:01\",\n\t\"updatedAt\":\"2020-10-01 14:44:01\",\n\t\"UserId\":3,\n\t\"PostId\":17\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response : User not authenticated",
          "content": "HTTP/1.1 400 Bad Request\n{\n \t\"message\": \"You're not authenticated, please log in !\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/comments.js",
    "groupTitle": "Comments"
  },
  {
    "type": "get",
    "url": "/api/posts/:id/all/comments",
    "title": "Read All",
    "name": "ReadOne",
    "group": "Comments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "PostId",
            "description": "<p>id(unique)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Array",
            "description": "<p>All comments of the targeted post + comments info + comment author info</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n\t{\n\t\t\"id\":20,\n\t\t\"comment\":\"123\",\n\t\t\"user_id\":2,\n\t\t\"post_id\":11,\n\t\t\"created_at\":\"2020-09-29 19:43:24\",\n\t\t\"updated_at\":\"2020-09-29 19:43:37\",\n\t\t\"createdAt\":\"2020-09-29 19:43:24\",\n\t\t\"updatedAt\":\"2020-09-29 19:43:37\",\n\t\t\"UserId\":2,\n\t\t\"PostId\":11,\n\t\t\"User\":{\n\t\t\t\"id\":2,\n\t\t\t\"email\":\"deletedUser@admin.fr\",\n\t\t\t\"password\":\"$2a$10$BvS4N1seTASRfWlmRcBDN.LpKwwUp7Y/D92I..o/3xcNDyXkr58qu\",\n\t\t\t\"username\":\"Utilisateur supprimé\",\n\t\t\t\"role\":\"[\\\"user\\\",\\\"admin\\\"]\",\n\t\t\t\"bio\":null,\n\t\t\t\"url_profile_picture\":\"http://localhost:3000/images/deletedUser.png\",\n\t\t\t\"alt_profile_picture\":\"Photo de profil de l'utilisateur\",\n\t\t\t\"consents\":\"{\\\"shareable\\\":false,\\\"contactable\\\":false}\",\n\t\t\t\"created_at\":\"2020-09-24 17:33:09\",\n\t\t\t\"updated_at\":\"2020-09-30 19:42:58\",\n\t\t\t\"createdAt\":\"2020-09-24 17:33:09\",\n\t\t\t\"updatedAt\":\"2020-09-30 19:42:58\"\n\t\t}\n\t},\n\t{\n\t\t\"id\":26,\n\t\t\"comment\":\"123456\",\n\t\t\"user_id\":3,\n\t\t\"post_id\":11,\n\t\t\"created_at\":\"2020-09-30 15:07:10\",\n\t\t\"updated_at\":\"2020-09-30 15:07:10\",\n\t\t\"createdAt\":\"2020-09-30 15:07:10\",\n\t\t\"updatedAt\":\"2020-09-30 15:07:10\",\n\t\t\"UserId\":3,\n\t\t\"PostId\":11,\n\t\t\"User\":{\n\t\t\t\"id\":3,\n\t\t\t\"email\":\"test2@test.fr\",\n\t\t\t\"password\":\"$2a$10$tloa5dX6MNt.Iaw6QAMnuu/2oeO5gvW.tg7xSaVImo/0assd.12R2\",\n\t\t\t\"username\":\"Testeur test\",\n\t\t\t\"role\":\"[\\\"user\\\",\\\"admin\\\"]\",\n\t\t\t\"bio\":\"123456\",\n\t\t\t\"url_profile_picture\":\"http://localhost:3000/images/defaultPicture.png\",\n\t\t\t\"alt_profile_picture\":\"Photo de profil de l'utilisateur\",\n\t\t\t\"consents\":\"{\\\"shareable\\\":\\\"false\\\",\\\"contactable\\\":\\\"false\\\"}\",\n\t\t\t\"created_at\":\"2020-09-24 20:35:11\",\"updated_at\":\"2020-09-30 18:20:24\",\n\t\t\t\"createdAt\":\"2020-09-24 20:35:11\",\"updatedAt\":\"2020-09-30 18:20:24\"\n\t\t}\n\t}\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response : User not authenticated",
          "content": "HTTP/1.1 400 Bad Request\n{\n \t\"message\": \"You're not authenticated, please log in !\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/comments.js",
    "groupTitle": "Comments"
  },
  {
    "type": "put",
    "url": "/api/posts/:id/:comment_id",
    "title": "Update",
    "name": "Update",
    "group": "Comments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "PostId",
            "description": "<p>id(unique)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "CommentId",
            "description": "<p>id(unique)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Message",
            "description": "<p>Message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"message\":\"Your comment has been updated !\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response : User not allowed for this action",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"message\": \"You're not allowed to update this comment\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/comments.js",
    "groupTitle": "Comments"
  },
  {
    "type": "put",
    "url": "/api/report/comment/:id",
    "title": "Delete Comment Report",
    "name": "DeleteCommentReport",
    "group": "Post_Reports_and_Comments_reports",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "CommentReportId",
            "description": "<p>id(unique)</p>"
          }
        ]
      }
    },
    "description": "<p>⚠️Admin role needed</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Message",
            "description": "<p>message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"message\":\"This report has been deleted !\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response : User not allowed for this action",
          "content": "HTTP/1.1 403 Forbidden\n{\n\t\"message\": \"You're not allowed to access this route\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/commentsReport.js",
    "groupTitle": "Post_Reports_and_Comments_reports"
  },
  {
    "type": "delete",
    "url": "/api/report/post/:id",
    "title": "Delete Post Report",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "PostReportId",
            "description": "<p>id(unique)</p>"
          }
        ]
      }
    },
    "name": "DeletePostReport",
    "group": "Post_Reports_and_Comments_reports",
    "description": "<p>⚠️Admin role needed</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Message",
            "description": "<p>message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"message\":\"This report has been deleted !\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response : User not allowed for this action",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"message\": \"You're not allowed to access this route\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/postsReports.js",
    "groupTitle": "Post_Reports_and_Comments_reports"
  },
  {
    "type": "get",
    "url": "/api/report",
    "title": "Read All",
    "name": "ReadAll",
    "group": "Post_Reports_and_Comments_reports",
    "description": "<p>⚠️Admin role needed</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Object",
            "description": "<p>All posts and comments reports</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"postReports\":[\n\t\t{\n\t\t\t\"id\":6,\n\t\t\t\"post_id\":17,\n\t\t\t\"user_id\":3,\n\t\t\t\"report\":\"123456789\",\n\t\t\t\"status\":\"treated\",\n\t\t\t\"created_at\":\"2020-09-30 15:14:45\",\n\t\t\t\"updated_at\":\"2020-09-30 15:14:45\",\n\t\t\t\"createdAt\":\"2020-09-30 15:14:45\",\n\t\t\t\"updatedAt\":\"2020-09-30 15:14:45\",\n\t\t\t\"UserId\":3,\"PostId\":17\n\t\t},\n\t\t{\n\t\t\t\"id\":5,\n\t\t\t\"post_id\":7,\n\t\t\t\"user_id\":2,\n\t\t\t\"report\":\"lokijuhytyrdftgyhujikolpkojihuyd\",\n\t\t\t\"status\":\"pending\",\n\t\t\t\"created_at\":\"2020-09-27 19:56:06\",\n\t\t\t\"updated_at\":\"2020-09-29 19:02:00\",\n\t\t\t\"createdAt\":\"2020-09-27 19:56:06\",\n\t\t\t\"updatedAt\":\"2020-09-29 19:02:00\",\n\t\t\t\"UserId\":2,\n\t\t\t\"PostId\":7\n\t\t},\n\t\t{\n\t\t\t\"id\":4,\n\t\t\t\"post_id\":1,\n\t\t\t\"user_id\":2,\n\t\t\t\"report\":\"123456789\",\n\t\t\t\"status\":\"pending\",\n\t\t\t\"created_at\":\"2020-09-27 13:13:55\",\n\t\t\t\"updated_at\":\"2020-09-29 19:02:00\",\n\t\t\t\"createdAt\":\"2020-09-27 13:13:55\",\n\t\t\t\"updatedAt\":\"2020-09-29 19:02:00\",\n\t\t\t\"UserId\":2,\n\t\t\t\"PostId\":1\n\t\t}\n\t],\n\t\"commentReports\":[]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response : User not allowed for this action",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"message\": \"You're not allowed to access this route\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/postsReports.js",
    "groupTitle": "Post_Reports_and_Comments_reports"
  },
  {
    "type": "put",
    "url": "/api/report/comment/:id",
    "title": "Update Comment Report",
    "name": "UpdateCommentReport",
    "group": "Post_Reports_and_Comments_reports",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "CommentReportId",
            "description": "<p>id(unique)</p>"
          }
        ]
      }
    },
    "description": "<p>⚠️Admin role needed</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Message",
            "description": "<p>message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"message\":\"Report 9 has been updated !\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response : User not allowed for this action",
          "content": "HTTP/1.1 403 Forbidden\n{\n\t\"message\": \"You're not allowed to access this route\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/commentsReport.js",
    "groupTitle": "Post_Reports_and_Comments_reports"
  },
  {
    "type": "put",
    "url": "/api/report/post/:id",
    "title": "Update Post Report",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "PostReportId",
            "description": "<p>id(unique)</p>"
          }
        ]
      }
    },
    "name": "UpdatePostReport",
    "group": "Post_Reports_and_Comments_reports",
    "description": "<p>⚠️Admin role needed</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Message",
            "description": "<p>message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"message\":\"Report 5 has been updated !\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response : User not allowed for this action",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"message\": \"You're not allowed to access this route\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/postsReports.js",
    "groupTitle": "Post_Reports_and_Comments_reports"
  },
  {
    "type": "post",
    "url": "/api/posts",
    "title": "Create",
    "name": "Create",
    "group": "Posts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Object",
            "description": "<p>Message + new post info</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n\t\"message\":\"You're post has been created !\",\n\t\"post\":{\n\t\t\"id\":18,\n\t\t\"title\":\"123\",\n\t\t\"UserId\":3,\n\t\t\"content\":\"123\",\n\t\t\"url_gif\":\"http://localhost:3000/images/4629494962.gif\",\n\t\t\"alt_gif\":\"GIF partagé par l'utilisateur\",\n\t\t\"updatedAt\":\"2020-10-01T12:56:04.501Z\",\n\t\t\"createdAt\":\"2020-10-01T12:56:04.501Z\"\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: User not Authenticated",
          "content": "HTTP/1.1 400 Bad Request\n{\n \t\"message\": \"You're not authenticated, please log in !\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/posts.js",
    "groupTitle": "Posts"
  },
  {
    "type": "post",
    "url": "/api/posts/:id/like",
    "title": "Create Like",
    "name": "CreateLike",
    "group": "Posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "PostId",
            "description": "<p>id(unique)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Object",
            "description": "<p>new like info</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n\t\"id\":23,\n\t\"post_id\":\"17\",\n\t\"user_id\":3,\n\t\"updatedAt\":\"2020-10-01T12:59:53.353Z\",\n\t\"createdAt\":\"2020-10-01T12:59:53.353Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: User not Authenticated",
          "content": "HTTP/1.1 400 Bad Request\n{\n \t\"message\": \"You're not authenticated, please log in !\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/posts.js",
    "groupTitle": "Posts"
  },
  {
    "type": "post",
    "url": "/api/posts",
    "title": "Create Post Report",
    "name": "CreatePostReport",
    "group": "Posts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Object",
            "description": "<p>Message + new post report info</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n\t\"message\":\"Your report has been sent, we'll eventually contact you if we need more information !\",\n\t\"report\":{\n\t\t\"id\":11,\n\t\t\"PostId\":\"18\",\n\t\t\"UserId\":3,\n\t\t\"report\":\"123\",\n\t\t\"status\":\"pending\",\n\t\t\"updatedAt\":\"2020-10-01T13:26:27.036Z\",\n\t\t\"createdAt\":\"2020-10-01T13:26:27.036Z\"\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: User not Authenticated",
          "content": "HTTP/1.1 400 Bad Request\n{\n \t\"message\": \"You're not authenticated, please log in !\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/posts.js",
    "groupTitle": "Posts"
  },
  {
    "type": "delete",
    "url": "/api/posts/:id",
    "title": "Delete",
    "name": "Delete",
    "group": "Posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "PostId",
            "description": "<p>id(unique)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Message",
            "description": "<p>message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"message\":\"Post deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: User not Authenticated",
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"message\": \"You're not authenticated, please log in !\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/posts.js",
    "groupTitle": "Posts"
  },
  {
    "type": "get",
    "url": "/api/posts/",
    "title": "Read All",
    "name": "ReadAll",
    "group": "Posts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Array",
            "description": "<p>All posts info</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n\t{\n\t\t\"id\":18,\n\t\t\"title\":\"123\",\n\t\t\"content\":\"123\",\n\t\t\"user_id\":3,\n\t\t\"url_gif\":\"http://localhost:3000/images/4629494962.gif\",\n\t\t\"alt_gif\":\"GIF partagé par l'utilisateur\",\n\t\t\"created_at\":\"2020-10-01 14:56:04\",\n\t\t\"updated_at\":\"2020-10-01 14:56:04\",\n\t\t\"createdAt\":\"2020-10-01 14:56:04\",\n\t\t\"updatedAt\":\"2020-10-01 14:56:04\",\n\t\t\"UserId\":3,\n\t\t\"User\":{\n\t\t\t\"id\":3,\n\t\t\t\"email\":\"test2@test.fr\",\n\t\t\t\"password\":\"$2a$10$tloa5dX6MNt.Iaw6QAMnuu/2oeO5gvW.tg7xSaVImo/0assd.12R2\",\n\t\t\t\"username\":\"Testeur test\",\n\t\t\t\"role\":\"[\\\"user\\\",\\\"admin\\\"]\",\n\t\t\t\"bio\":\"123456\",\n\t\t\t\"url_profile_picture\":\"http://localhost:3000/images/defaultPicture.png\",\n\t\t\t\"alt_profile_picture\":\"Photo de profil de l'utilisateur\",\n\t\t\t\"consents\":\"{\\\"shareable\\\":\\\"false\\\",\\\"contactable\\\":\\\"false\\\"}\",\n\t\t\t\"created_at\":\"2020-09-24 20:35:11\",\n\t\t\t\"updated_at\":\"2020-09-30 18:20:24\",\n\t\t\t\"createdAt\":\"2020-09-24 20:35:11\",\n\t\t\t\"updatedAt\":\"2020-09-30 18:20:24\"\n\t\t},\n\t\t\"Comments\":[],\n\t\t\"Likes\":[]\n\t},\n\t{\n\t\t\"id\":17,\n\t\t\"title\":\"123\",\n\t\t\"content\":\"www.google.fr\",\n\t\t\"user_id\":3,\n\t\t\"url_gif\":\"http://localhost:3000/images/7808213270.gif\",\n\t\t\"alt_gif\":\"GIF partagé par l'utilisateur\",\n\t\t\"created_at\":\"2020-09-30 15:13:55\",\n\t\t\"updated_at\":\"2020-09-30 15:14:25\",\n\t\t\"createdAt\":\"2020-09-30 15:13:55\",\n\t\t\"updatedAt\":\"2020-09-30 15:14:25\",\n\t\t\"UserId\":3,\n\t\t\"User\":{\n\t\t\t\"id\":3,\n\t\t\t\"email\":\"test2@test.fr\",\n\t\t\t\"password\":\"$2a$10$tloa5dX6MNt.Iaw6QAMnuu/2oeO5gvW.tg7xSaVImo/0assd.12R2\",\n\t\t\t\"username\":\"Testeur test\",\n\t\t\t\"role\":\"[\\\"user\\\",\\\"admin\\\"]\",\n\t\t\t\"bio\":\"123456\",\n\t\t\t\"url_profile_picture\":\"http://localhost:3000/images/defaultPicture.png\",\n\t\t\t\"alt_profile_picture\":\"Photo de profil de l'utilisateur\",\n\t\t\t\"consents\":\"{\\\"shareable\\\":\\\"false\\\",\\\"contactable\\\":\\\"false\\\"}\",\n\t\t\t\"created_at\":\"2020-09-24 20:35:11\",\n\t\t\t\"updated_at\":\"2020-09-30 18:20:24\",\n\t\t\t\"createdAt\":\"2020-09-24 20:35:11\",\n\t\t\t\"updatedAt\":\"2020-09-30 18:20:24\"\n\t\t},\n\t\t\"Comments\":[\n\t\t\t{\n\t\t\t\t\"id\":29,\n\t\t\t\t\"comment\":\"123456\",\n\t\t\t\t\"user_id\":3,\n\t\t\t\t\"post_id\":17,\n\t\t\t\t\"created_at\":\"2020-10-01 14:44:01\",\n\t\t\t\t\"updated_at\":\"2020-10-01 14:44:01\",\n\t\t\t\t\"createdAt\":\"2020-10-01 14:44:01\",\n\t\t\t\t\"updatedAt\":\"2020-10-01 14:44:01\",\n\t\t\t\t\"UserId\":3,\n\t\t\t\t\"PostId\":17\n\t\t\t}\n\t\t],\n\t\t\"Likes\":[\n\t\t\t{\n\t\t\t\t\"id\":23,\n\t\t\t\t\"user_id\":3,\n\t\t\t\t\"post_id\":17,\n\t\t\t\t\"created_at\":\"2020-10-01 14:59:53\",\n\t\t\t\t\"updated_at\":\"2020-10-01 14:59:53\",\n\t\t\t\t\"createdAt\":\"2020-10-01 14:59:53\",\n\t\t\t\t\"updatedAt\":\"2020-10-01 14:59:53\"\n\t\t\t}\n\t\t]\n\t}\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: User not Authenticated",
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"message\": \"You're not authenticated, please log in !\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/posts.js",
    "groupTitle": "Posts"
  },
  {
    "type": "get",
    "url": "/api/posts/from/:user_id",
    "title": "Read All From One User",
    "name": "ReadAllFromOneUserId",
    "group": "Posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "PostId",
            "description": "<p>id(unique)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "UserId",
            "description": "<p>id(unique)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Array",
            "description": "<p>All posts created by the targeted user + their info + their likes + their comments</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n\t{\n\t\t\"id\":17,\n\t\t\"title\":\"123\",\n\t\t\"content\":\"www.google.fr\",\n\t\t\"user_id\":3,\n\t\t\"url_gif\":\"http://localhost:3000/images/7808213270.gif\",\n\t\t\"alt_gif\":\"GIF partagé par l'utilisateur\",\n\t\t\"created_at\":\"2020-09-30 15:13:55\",\n\t\t\"updated_at\":\"2020-09-30 15:14:25\",\n\t\t\"createdAt\":\"2020-09-30 15:13:55\",\n\t\t\"updatedAt\":\"2020-09-30 15:14:25\",\n\t\t\"UserId\":3,\n\t\t\"Likes\":[\n\t\t\t{\n\t\t\t\t\"id\":23,\n\t\t\t\t\"user_id\":3,\n\t\t\t\t\"post_id\":17,\n\t\t\t\t\"created_at\":\"2020-10-01 14:59:53\",\n\t\t\t\t\"updated_at\":\"2020-10-01 14:59:53\",\n\t\t\t\t\"createdAt\":\"2020-10-01 14:59:53\",\n\t\t\t\t\"updatedAt\":\"2020-10-01 14:59:53\"\n\t\t\t}\n\t\t],\n\t\t\"Comments\":[\n\t\t\t{\n\t\t\t\t\"id\":29,\n\t\t\t\t\"comment\":\"123456\",\n\t\t\t\t\"user_id\":3,\n\t\t\t\t\"post_id\":17,\n\t\t\t\t\"created_at\":\"2020-10-01 14:44:01\",\n\t\t\t\t\"updated_at\":\"2020-10-01 14:44:01\",\n\t\t\t\t\"createdAt\":\"2020-10-01 14:44:01\",\n\t\t\t\t\"updatedAt\":\"2020-10-01 14:44:01\",\n\t\t\t\t\"UserId\":3,\n\t\t\t\t\"PostId\":17\n\t\t\t}\n\t\t]\n\t},\n\t{\n\t\t\"id\":18,\n\t\t\"title\":\"123\",\n\t\t\"content\":\"123\",\n\t\t\"user_id\":3,\n\t\t\"url_gif\":\"http://localhost:3000/images/4629494962.gif\",\n\t\t\"alt_gif\":\"GIF partagé par l'utilisateur\",\n\t\t\"created_at\":\"2020-10-01 14:56:04\",\n\t\t\"updated_at\":\"2020-10-01 14:56:04\",\n\t\t\"createdAt\":\"2020-10-01 14:56:04\",\n\t\t\"updatedAt\":\"2020-10-01 14:56:04\",\n\t\t\"UserId\":3,\n\t\t\"Likes\":[],\n\t\t\"Comments\":[]\n\t}\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: User not Authenticated",
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"message\": \"You're not authenticated, please log in !\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/posts.js",
    "groupTitle": "Posts"
  },
  {
    "type": "get",
    "url": "/api/posts/:id/like",
    "title": "Read Like",
    "name": "ReadLike",
    "group": "Posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "PostId",
            "description": "<p>id(unique)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Array",
            "description": "<p>all likes info of the targeted post</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n\t{\n\t\t\"id\":2,\n\t\t\"username\":\"Utilisateur supprimé\",\n\t\t\"url_profile_picture\":\"http://localhost:3000/images/deletedUser.png\",\n\t\t\"alt_profile_picture\":\"Photo de profil de l'utilisateur\"\n\t},\n\t{\n\t\t\"id\":3,\n\t\t\"username\":\"Testeur test\",\n\t\t\"url_profile_picture\":\"http://localhost:3000/images/defaultPicture.png\",\n\t\t\"alt_profile_picture\":\"Photo de profil de l'utilisateur\"\n\t}\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: User not Authenticated",
          "content": "HTTP/1.1 400 Bad Request\n{\n \t\"message\": \"You're not authenticated, please log in !\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/posts.js",
    "groupTitle": "Posts"
  },
  {
    "type": "get",
    "url": "/api/posts/:id",
    "title": "Read One",
    "name": "ReadOne",
    "group": "Posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "PostId",
            "description": "<p>id(unique)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Object",
            "description": "<p>Post info</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"id\":18,\n\t\"title\":\"123\",\n\t\"content\":\"123\",\n\t\"user_id\":3,\n\t\"url_gif\":\"http://localhost:3000/images/4629494962.gif\",\n\t\"alt_gif\":\"GIF partagé par l'utilisateur\",\n\t\"created_at\":\"2020-10-01 14:56:04\",\n\t\"updated_at\":\"2020-10-01 14:56:04\",\n\t\"createdAt\":\"2020-10-01 14:56:04\",\n\t\"updatedAt\":\"2020-10-01 14:56:04\",\n\t\"UserId\":3\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: User not Authenticated",
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"message\": \"You're not authenticated, please log in !\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/posts.js",
    "groupTitle": "Posts"
  },
  {
    "type": "put",
    "url": "/api/posts/:id",
    "title": "Update",
    "name": "Update",
    "group": "Posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "PostId",
            "description": "<p>id(unique)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Message",
            "description": "<p>message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"message\":\"Your post has been updated !\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: User not Authenticated",
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"message\": \"You're not authenticated, please log in !\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/posts.js",
    "groupTitle": "Posts"
  },
  {
    "type": "post",
    "url": "/api/research",
    "title": "Research",
    "name": "Research",
    "group": "Research",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Array",
            "description": "<p>All users info which usernames corresponding to user research (here with 'test')</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n[\n\t{\n\t\t\"id\":3,\n\t\t\"email\":\"test2@test.fr\",\n\t\t\"password\":\"$2a$10$tloa5dX6MNt.Iaw6QAMnuu/2oeO5gvW.tg7xSaVImo/0assd.12R2\",\n\t\t\"username\":\"Testeur test\",\n\t\t\"role\":\"[\\\"user\\\",\\\"admin\\\"]\",\n\t\t\"bio\":\"123456\",\n\t\t\"url_profile_picture\":\"http://localhost:3000/images/defaultPicture.png\",\n\t\t\"alt_profile_picture\":\"Photo de profil de l'utilisateur\",\n\t\t\"consents\":\"{\\\"shareable\\\":\\\"false\\\",\\\"contactable\\\":\\\"false\\\"}\",\n\t\t\"created_at\":\"2020-09-24 20:35:11\",\n\t\t\"updated_at\":\"2020-09-30 18:20:24\",\n\t\t\"createdAt\":\"2020-09-24 20:35:11\",\n\t\t\"updatedAt\":\"2020-09-30 18:20:24\"\n\t},\n\t{\n\t\t\"id\":15,\n\t\t\"email\":\"test987@test.fr\",\n\t\t\"password\":\"$2a$10$gCkSEOQVohSRJL2.Y0Rmh.3QDFsTUim4MeEm7VMe2gvJobqcbr1VO\",\n\t\t\"username\":\"Lulu Test\",\n\t\t\"role\":\"[\\\"user\\\"]\",\n\t\t\"bio\":\"\",\n\t\t\"url_profile_picture\":\"http://localhost:3000/images/defaultPicture.png\",\n\t\t\"alt_profile_picture\":\"Photo de profil de l'utilisateur\",\n\t\t\"consents\":\"{\\\"shareable\\\":false,\\\"contactable\\\":false}\",\n\t\t\"created_at\":\"2020-09-30 14:15:42\",\n\t\t\"updated_at\":\"2020-09-30 14:15:42\",\n\t\t\"createdAt\":\"2020-09-30 14:15:42\",\n\t\t\"updatedAt\":\"2020-09-30 14:15:42\"\n\t}\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response : User not allowed for this action",
          "content": "HTTP/1.1 400 Bad request\n{\n    \"message\": \"You're not authenticated, please log in !\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/research.js",
    "groupTitle": "Research"
  },
  {
    "type": "delete",
    "url": "/api/auth/:id",
    "title": "Delete",
    "name": "Delete",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "UserId",
            "description": "<p>id (unique)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>user deleted</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"message\": \"User 14 deleted !\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: User couldn't be found",
          "content": "HTTP/1.1 404 Not found\n{\n\t\"message\": \"User 1500 couldn't be found !\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/auth/login",
    "title": "Log in",
    "name": "Login",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"user_id\":18,\n\t\"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE4LCJpYXQiOjE2MDE0ODAwMzQsImV4cCI6MTYwMTU2NjQzNH0.YbBLM9y_GBwD9o3vaWa42z4hTYkYAfeu0L_NoUB1D5E\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: User couldn't be found",
          "content": "HTTP/1.1 404 Not found\n{\n\t\"message\":\"This user couldn't be found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/auth/",
    "title": "Read All",
    "name": "ReadAll",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>Message + All users</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\":\"Here are all users\",\n    \"users\": [\n    \t\t{\n    \t\t\t\"id\":4,\n    \t\t\t\"username\":\"Lulu\",\n    \t\t\t\"email\":\"test3@test.fr\",\n    \t\t\t\"url_profile_picture\":\"http://localhost:3000/images/defaultPicture.png\",\n    \t\t\t\"alt_profile_picture\":\"Photo de profil de l'utilisateur\",\n    \t\t\t\"role\":\"[\\\"user\\\"]\"\n    \t\t},\n    \t\t{\n    \t\t\t\"id\":18,\n    \t\t\t\"username\":\"Lulu blablabla\",\n    \t\t\t\"email\":\"testlkgjhfgjik@test.fr\",\n    \t\t\t\"url_profile_picture\":\"http://localhost:3000/images/defaultPicture.png\",\n    \t\t\t\"alt_profile_picture\":\"Photo de profil de l'utilisateur\",\n    \t\t\t\"role\":\"[\\\"user\\\"]\"\n    \t\t},\n    \t\t{\n    \t\t\t\"id\":17,\n    \t\t\t\"username\":\"Lulu lululu\",\n    \t\t\t\"email\":\"testlkjvhbjnk@test.fr\",\n    \t\t\t\"url_profile_picture\":\"http://localhost:3000/images/defaultPicture.png\",\n    \t\t\t\"alt_profile_picture\":\"Photo de profil de l'utilisateur\",\n    \t\t\t\"role\":\"[\\\"user\\\"]\"\n    \t\t}\n    \t  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: User not Authenticated",
          "content": "HTTP/1.1 400 Bad Request\n{\n \t\"message\": \"You're not authenticated, please log in !\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/auth/:id",
    "title": "Read One",
    "name": "ReadOne",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "User",
            "description": "<p>id (unique)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Object",
            "description": "<p>All user info</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\":2,\n    \"email\":\"deletedUser@admin.fr\",\n    \"password\":\"$2a$10$BvS4N1seTASRfWlmRcBDN.LpKwwUp7Y/D92I..o/3xcNDyXkr58qu\",\n    \"username\":\"Utilisateur supprimé\",\n    \"role\":\"[\\\"user\\\"]\",\n    \"bio\":null,\n    \"url_profile_picture\":\"http://localhost:3000/images/deletedUser.png\",\n    \"alt_profile_picture\":\"Photo de profil de l'utilisateur\",\n    \"consents\":\"{\\\"shareable\\\":false,\\\"contactable\\\":false}\",\n    \"created_at\":\"2020-09-24 17:33:09\",\n    \"updated_at\":\"2020-09-24 17:33:09\",\n    \"createdAt\":\"2020-09-24 17:33:09\",\n    \"updatedAt\":\"2020-09-24 17:33:09\",\n    \"Posts\":[\n    \t\t{\n    \t\t\"id\":1,\n    \t\t\"title\":\"123\",\n    \t\t\"content\":\"123456🤪\",\n    \t\t\"user_id\":2,\n    \t\t\"url_gif\":\"http://localhost:3000/images/7932182674.gif\",\n    \t\t\"alt_gif\":\"GIF partagé par l'utilisateur\",\n    \t\t\"created_at\":\"2020-09-24 17:59:11\",\n    \t\t\"updated_at\":\"2020-09-29 16:51:26\",\n    \t\t\"createdAt\":\"2020-09-24 17:59:11\",\n    \t\t\"updatedAt\":\"2020-09-29 16:51:26\",\n    \t\t\"UserId\":2\n    \t\t},\n    \t\t{\n    \t\t\"id\":5,\n    \t\t\"title\":\"132\",\n    \t\t\"content\":\"khghfwsdfgthyhujikoljnhg 😧\",\n    \t\t\"user_id\":2,\n    \t\t\"url_gif\":\"http://localhost:3000/images/579015870.gif\",\n    \t\t\"alt_gif\":\"GIF partagé par l'utilisateur\",\n    \t\t\"created_at\":\"2020-09-27 15:06:02\",\n    \t\t\"updated_at\":\"2020-09-29 17:28:51\",\n    \t\t\"createdAt\":\"2020-09-27 15:06:02\",\n    \t\t\"updatedAt\":\"2020-09-29 17:28:51\",\n    \t\t\"UserId\":2\n    \t\t}\n    \t ],\n    \t\"Comments\": [],\n    \t\"Likes\": [],\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: User couldn't be found",
          "content": "HTTP/1.1 404 Not found\n{\n\t\"message\": \"User with ID 3 not found !\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/auth/signup",
    "title": "Sign Up",
    "name": "Sign_up",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>Message + user ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n\t\"message\":\"New user created ! User ID: 18\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: Wrong email/password",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n\t\"errors\": [\n\t\t\t\t{\n\t\t\t\t\t\"value\": \"123456\",\n\t\t\t\t\t\"msg\": \"Email incorrect. Please try with a valid mail\",\n\t\t\t\t\t\"param\": \"email\",\n\t\t\t\t\t\"location\": \"body\"\n\t\t\t\t}\n\t\t\t]\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>⚠️-  If this is the first user signing up, a second account will be automatically created to reassign all posts and comments from future deleted users.</p> <p>⚠️-  First user signing up is Admin</p>",
    "version": "0.0.0",
    "filename": "controllers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/api/auth/:id",
    "title": "Update",
    "name": "Update",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "UserId",
            "description": "<p>id (unique)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>Updated + new info</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\":\"Your information have been updated !\",\n    \"user\": {\n    \t\t\"id\":3,\n    \t\t\"email\":\"test2@test.fr\",\n    \t\t\"password\":\"$2a$10$tloa5dX6MNt.Iaw6QAMnuu/2oeO5gvW.tg7xSaVImo/0assd.12R2\",\n    \t\t\"username\":\"Testeur test\",\n    \t\t\"role\":\"[\\\"user\\\",\\\"admin\\\"]\",\n    \t\t\"bio\":\"123456\",\n    \t\t\"url_profile_picture\":\"http://localhost:3000/images/defaultPicture.png\",\n    \t\t\"alt_profile_picture\":\"Photo de profil de l'utilisateur\",\n    \t\t\"consents\":\"{\\\"shareable\\\":\\\"false\\\",\\\"contactable\\\":\\\"false\\\"}\",\n    \t\t\"created_at\":\"2020-09-24 20:35:11\",\n    \t\t\"updated_at\":\"2020-09-30 18:20:24\",\n    \t\t\"createdAt\":\"2020-09-24 20:35:11\",\n    \t\t\"updatedAt\":\"2020-09-30 18:20:24\"\n    \t\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response : User is not allowed for this action",
          "content": "HTTP/1.1 403 Forbidden\n{\n \t\"message\": \"You're not allowed for this action !\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/api/auth/:id",
    "title": "Update Privilege",
    "name": "UpdatePrivilege",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "UserId",
            "description": "<p>id (unique)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>Message + new role</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\":\"This user's privilege has been updated to : user,admin ! \"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: User not allowed for this action",
          "content": "HTTP/1.1 403 Forbidden\n{\n \t\"message\": \"You're not allowed for this route !\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>⚠️Admin role needed</p>",
    "version": "0.0.0",
    "filename": "controllers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/issue",
    "title": "Create",
    "name": "Create",
    "group": "User_Issue",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Issue",
            "description": "<p>Issue created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n\t\"id\":6,\n\t\"lastName\":\"Baroy\",\n\t\"firstName\":\"Lulu\",\n\t\"email\":\"test@test.fr\",\n\t\"issue\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n\tincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n\tullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n\tin voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n\tnon proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\",\n\t\"status\":\"pending\",\n\t\"updatedAt\":\"2020-09-30T17:55:08.939Z\",\n\t\"createdAt\":\"2020-09-30T17:55:08.939Z\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/usersIssue.js",
    "groupTitle": "User_Issue"
  },
  {
    "type": "delete",
    "url": "/api/issue/:id",
    "title": "Delete",
    "name": "Delete",
    "group": "User_Issue",
    "description": "<p>⚠️Admin role needed</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "IssueId",
            "description": "<p>id(unique)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Message",
            "description": "<p>message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"The user issue has been deleted !\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response : User not allowed for this action",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"message\": \"You're not allowed to access this route\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/usersIssue.js",
    "groupTitle": "User_Issue"
  },
  {
    "type": "get",
    "url": "/api/issue/",
    "title": "Read All",
    "name": "ReadAll",
    "group": "User_Issue",
    "description": "<p>⚠️Admin role needed</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Array",
            "description": "<p>array All issues</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n\t{\n\t\t\"id\":3,\n\t\t\"lastName\":\"Baroy\",\n\t\t\"firstName\":\"Lulu\",\n\t\t\"email\":\"test@test.fr\",\n\t\t\"issue\":\"blablablbalbaa\",\n\t\t\"status\":\"treated\",\n\t\t\"created_at\":\"2020-09-27 14:38:34\",\n\t\t\"updated_at\":\"2020-09-27 14:38:49\",\n\t\t\"createdAt\":\"2020-09-27 14:38:34\",\n\t\t\"updatedAt\":\"2020-09-27 14:38:49\"\n\t},\n\t{\n\t\t\"id\":5,\n\t\t\"lastName\":\"hgbvd\",\n\t\t\"firstName\":\"gtfdsx\",\n\t\t\"email\":\"htgfds\",\n\t\t\"issue\":\"htgrefegthyuiytr\",\n\t\t\"status\":\"pending\",\n\t\t\"created_at\":\"2020-09-27 19:56:18\",\n\t\t\"updated_at\":\"2020-09-30 19:59:22\",\n\t\t\"createdAt\":\"2020-09-27 19:56:18\",\n\t\t\"updatedAt\":\"2020-09-30 19:59:22\"\n\t}\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response : User not allowed for this action",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"message\": \"You're not allowed to access this route\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/usersIssue.js",
    "groupTitle": "User_Issue"
  },
  {
    "type": "get",
    "url": "/api/issue/all/pending",
    "title": "Read All Pending",
    "name": "ReadAllPending",
    "group": "User_Issue",
    "description": "<p>⚠️Admin role needed</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Array",
            "description": "<p>All issues with status 'pending'</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n\t{\n\t\t\"id\":6,\n\t\t\"lastName\":\"Baroy\",\n\t\t\"firstName\":\"Lulu\",\n\t\t\"email\":\"test@test.fr\",\n\t\t\"issue\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i\",\n\t\t\"status\":\"pending\",\n\t\t\"created_at\":\"2020-09-30 19:55:08\",\n\t\t\"updated_at\":\"2020-09-30 19:55:08\",\n\t\t\"createdAt\":\"2020-09-30 19:55:08\",\n\t\t\"updatedAt\":\"2020-09-30 19:55:08\"\n\t}\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response : User not allowed for this action",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"message\": \"You're not allowed to access this route\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/usersIssue.js",
    "groupTitle": "User_Issue"
  },
  {
    "type": "get",
    "url": "/api/issue/all/messageWaiting",
    "title": "Read Waiting Messages",
    "name": "ReadMessageWaiting",
    "group": "User_Issue",
    "description": "<p>⚠️Admin role needed</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Waiting",
            "description": "<p>All issues and reports waiting</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"issues\":[\n\t\t{\n\t\t\t\"id\":6,\n\t\t\t\"lastName\":\"Baroy\",\n\t\t\t\"firstName\":\"Lulu\",\n\t\t\t\"email\":\"test@test.fr\",\n\t\t\t\"issue\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i\",\n\t\t\t\"status\":\"pending\",\n\t\t\t\"created_at\":\"2020-09-30 19:55:08\",\n\t\t\t\"updated_at\":\"2020-09-30 19:55:08\",\n\t\t\t\"createdAt\":\"2020-09-30 19:55:08\",\n\t\t\t\"updatedAt\":\"2020-09-30 19:55:08\"\n\t\t}\n\t],\n\t\"postReports\":[\n\t\t{\n\t\t\t\"id\":4,\n\t\t\t\"post_id\":1,\n\t\t\t\"user_id\":2,\n\t\t\t\"report\":\"123456789\",\n\t\t\t\"status\":\"pending\",\n\t\t\t\"created_at\":\"2020-09-27 13:13:55\",\n\t\t\t\"updated_at\":\"2020-09-29 19:02:00\",\n\t\t\t\"createdAt\":\"2020-09-27 13:13:55\",\n\t\t\t\"updatedAt\":\"2020-09-29 19:02:00\",\n\t\t\t\"UserId\":2,\n\t\t\t\"PostId\":1\n\t\t},\n\t\t{\n\t\t\t\"id\":5,\n\t\t\t\"post_id\":7,\n\t\t\t\"user_id\":2,\n\t\t\t\"report\":\"lokijuhytyrdftgyhujikolpkojihuyd\",\n\t\t\t\"status\":\"pending\",\n\t\t\t\"created_at\":\"2020-09-27 19:56:06\",\n\t\t\t\"updated_at\":\"2020-09-29 19:02:00\",\n\t\t\t\"createdAt\":\"2020-09-27 19:56:06\",\n\t\t\t\"updatedAt\":\"2020-09-29 19:02:00\",\n\t\t\t\"UserId\":2,\n\t\t\t\"PostId\":7\n\t\t}\n\t],\n\t\"commentReports\":[],\n\t\"total\":4\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response : User not allowed for this action",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"message\": \"You're not allowed to access this route\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/usersIssue.js",
    "groupTitle": "User_Issue"
  },
  {
    "type": "put",
    "url": "/api/issue/:id",
    "title": "Update",
    "name": "Update",
    "group": "User_Issue",
    "description": "<p>⚠️Admin role needed</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "IssueId",
            "description": "<p>id(unique)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>message issue updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"message\":\"User Issue updated\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response : User not allowed for this action",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"message\": \"You're not allowed to access this route\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/usersIssue.js",
    "groupTitle": "User_Issue"
  }
] });
