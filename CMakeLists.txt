cmake_minimum_required(VERSION 3.7)
project(node_alsa)

set(CMAKE_BUILD_TYPE Debug)
IF(CMAKE_COMPILER_IS_GNUCC)
    set(CMAKE_CXX_FLAGS_DEBUG "${CMAKE_CXX_FLAGS_DEBUG} -O0")
    set(CMAKE_C_FLAGS_DEBUG "${CMAKE_C_FLAGS_DEBUG} -O0")
ENDIF(CMAKE_COMPILER_IS_GNUCC)
set(CMAKE_CXX_STANDARD 14)

include(NodeJS.cmake)
nodejs_init()

if(UNIX AND NOT APPLE)
    add_nodejs_module(${PROJECT_NAME} capture.cc)
    target_link_libraries(${PROJECT_NAME} PUBLIC asound m)
else()

endif()