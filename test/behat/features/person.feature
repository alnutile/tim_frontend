Feature: Person CRUD
    Background: Refresh page
      Given I am on "#/dashboard"

    Scenario: Can Edit a person
      Given I am on "#/dashboard"
      And I wait
      And I follow "Witnesses"
      Then I should see "Melton Brooks"
