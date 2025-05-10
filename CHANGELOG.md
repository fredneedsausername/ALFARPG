# ALFARPG Changelog

## Formatting

This changelog follows a custom formatting style inspired by [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) but with a take on it. We also add the "Planned" release date and generally personalize the release date format. Here's the template:

## [Unreleased] <-- Things ready to be released

### Added

- thing
- thing 2
- thing 3

### Changed <-- all sections are optional, we include them here for reference

### Removed

### Fixed

## [VER.SI.ON] - Planned <-- For future releases

### Added

### Changed

### Removed

### Fixed

## [VER.SI.ON] - mon D YYYY <-- For history of releases

### Added

### Changed

### Removed

### Fixed

<br>

# VERSIONS

## [0.1.0] - Planned

### Added

World and Camera
    - Terrain image is larger than the screen
    - Camera system
        - Always centers on the player

Player Controls and Movement
    - Player movement
        - Controlled by configurable keys (default: WASD)
        - Cannot move outside terrain bounds

Spawning System
    - Monsters spawn at fixed spots
        - When killed, respawn at the same spot after a delay

Combat System
    - Player Combat
        - Player uses a sword
            - Has an attack value based on its level
        - Attacking
            - Press Enter to attack
            - Has an attack cooldown
            - Attack area is a circle around the player
            - If a monster is in range, it takes damage equal to the player's attack value
    - Monster Combat
        - Monsters have health
        - Turn red briefly when damaged
        - Disappear when health reaches zero
        - Display a health bar after first being damaged
            - The bar is bound to and moves with the monster
    - Monster AI
        - Detection area is a large circle
            - When player enters, the monster follows indefinitely
        - Sprite flips based on movement direction
    - Monster Attacks
        - Monsters have an attack area (circular)
            - When player is in range, monster attacks
                - Shared attack cooldown among all monsters
                - Damage dealt = monster's attack - player's armor

Player Health and Defense System
    - Health
        - Max value is fixed
        - When health reaches zero
            - Player dies
                - All enemies stop following
                - Player animations stop
                - Player is teleported to spawn
                - Health is fully restored
        - Regenerates health at a fixed rate (per second)
    - Armor
        - Provides defense
        - Incoming damage is reduced by defense value
