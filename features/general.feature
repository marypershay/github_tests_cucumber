Feature: GitHub tests(general)

@desktop @ignore
Scenario: Find "Font-Awesome" repository using Explore GitHub 
    When I navigates to "https://github.com/"
    And I choose Explore GitHub
    When I choose "Made in Africa" category
    And I choose "bootstrap-tour" repository
    Then I see repository with name "bootstrap-tour"