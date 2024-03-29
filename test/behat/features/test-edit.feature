# forces a reload by going back to /
# otherwise it just froze here

Feature: Test Edit
  Background: Refresh page
    Given I am on "/"
    #Helps when comes with other tests

  Scenario: I should see the the form and click to other form items
    Given I am on "/sites/2/tests/test2_feature/edit"
    And I wait
    Then I fill in "tag-input" with "@tag"
    And I press "add-details"
    And I wait
    Then I should see "Tag Added @tag.."
    And I press the element ".scenarios > div:nth-child(1) > h4:nth-child(1) > a:nth-child(1)"
    Then I fill in "cfpTarget" with "some different text"
    And I press "cfpFormAdd"
    Then I should see "Step Added And I follow the element \"some different text\".."
    And I should see "Then I should"
    Then I fill in "search-steps" with "blah"
    And I should not see "Then I should"
    Then I fill in "search-steps" with ""
    And I fill in "seeFormTarget" with "some other other text"
    And I press "seeFormAdd"
    Then I should see "Step Added Then I should see \"some other other text\".."
    Then I select "not see" from "seeFormAction"
    And I press "seeFormAdd"
    Then I should see "Step Added Then I should not see \"some other other text\".."
