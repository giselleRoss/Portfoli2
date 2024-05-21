INSERT INTO project (name, description, deployed_url)
VALUES 
('Coast Salish Medium', 'A client project to create a booking website.', 'https://github.com/giselleRoss/coast-salish-medium'),
('Link Learning', 'A client project to create a learning portal for different roles from scratch.', 'https://github.com/Blue-Ocean-MCSPA/link-learning'),
('Disney Clone', 'A project to clone a Disney product page to test our skills and abilities.', 'https://disney-clone-bay-three.vercel.app/'),
('PureBites', 'A project to develop a frontend application with vegan recipes.', 'https://purebites.vercel.app/'),
('Dad Jokes', 'A project to develop a central place with dad jokes where it was interactive and fun.', 'http://dadjokesproject.s3-website.us-east-2.amazonaws.com/');

-- Insert data into the case_study table
INSERT INTO case_study (project_id, problem_solved, approach, results, image_url)
VALUES
(1, 'Users had difficulty booking appointments.', 'Simplified the booking process and improved UI.', 'Increased bookings by 25%.', 'https://example.com/images/coast-salish-medium.jpg'),
(2, 'A need for a tailored learning portal for different roles.', 'Developed the portal from scratch with role-specific content.', 'Enhanced user satisfaction by 40%.', 'https://example.com/images/link-learning.jpg'),
(3, 'Testing skills and abilities with a complex product page.', 'Recreated the page with modern design and features.', 'Boosted page engagement by 50%.', 'https://example.com/images/disney-clone.jpg'),
(4, 'The app lacked appealing content and design.', 'Developed new recipes and revamped the design.', 'Increased user retention by 35%.', 'https://example.com/images/purebites.jpg'),
(5, 'Lack of a central, interactive place for dad jokes.', 'Redesigned for interactivity and fun content.', 'Improved user engagement significantly.', 'https://example.com/images/dad-jokes.jpg');
