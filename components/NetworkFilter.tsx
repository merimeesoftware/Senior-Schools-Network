'use client';

import { useState } from 'react';
import StageBadge from './StageBadge';
import CTAButton from './CTAButton';
import type { Stage } from '@/lib/types/content';
import type { NetworkMember, NetworkMemberType, EducationLevel } from '@/lib/content/network';
import { EDUCATION_LEVEL_METADATA } from '@/lib/content/network';
import Image from 'next/image';

interface NetworkFilterProps {
  members: NetworkMember[];
}

function MemberCard({ member }: { member: NetworkMember }) {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="card-elevated flex flex-col h-full">
      {/* Header with Logo and Info */}
      <div className="flex items-start gap-4 mb-4">
        {/* Logo */}
        <div className="w-20 h-20 flex-shrink-0">
          <div className="relative w-full h-full bg-parchment-dark rounded-lg border border-gold/20 flex items-center justify-center overflow-hidden">
            {member.logoPath ? (
              <Image
                src={`/assets/logos/schools/${member.logoPath}`}
                alt={`${member.name} crest`}
                fill
                className="object-contain p-1"
              />
            ) : (
              <span className="text-xs text-charcoal/30 text-center px-1">
                {member.name.split(' ').slice(0, 2).join(' ')}
              </span>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-2 mb-1">
            <h3 className="text-lg font-playfair font-semibold text-forest leading-tight">
              {member.name}
            </h3>
            <span className={`text-[10px] font-lato uppercase tracking-wide px-1.5 py-0.5 rounded flex-shrink-0 ${
              member.type === 'school' 
                ? 'bg-forest/10 text-forest' 
                : 'bg-gymnasium/10 text-gymnasium'
            }`}>
              {member.type}
            </span>
          </div>
          <p className="text-sm text-charcoal/70">{member.location}</p>
          <p className="text-sm text-charcoal/80 font-medium">{member.grades}</p>
          {member.faith && member.faith.length > 0 && (
            <p className="text-sm text-charcoal/60 italic">{member.faith.join(', ')}</p>
          )}
        </div>
      </div>

      {/* Stages */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {member.stages.map((stage) => (
          <StageBadge key={stage} stage={stage} size="sm" />
        ))}
      </div>

      {/* Description */}
      <div className="mb-4 flex-1">
        <p className={`text-sm text-charcoal/80 leading-relaxed ${expanded ? '' : 'line-clamp-3'}`}>
          {member.description}
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-forest hover:text-forest/80 font-medium mt-1"
        >
          {expanded ? 'Show less' : 'Read more'}
        </button>
      </div>

      {/* Actions */}
      <div className="flex gap-2 flex-wrap mt-auto">
        {member.website && (
          <a
            href={member.website}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-xs px-3 py-1.5"
          >
            Website
          </a>
        )}
        {member.admissionsLink && (
          <a
            href={member.admissionsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline text-xs px-3 py-1.5"
          >
            {member.type === 'program' ? 'Get Involved' : 'Admissions'}
          </a>
        )}
        {member.supportLink && (
          <a
            href={member.supportLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline text-xs px-3 py-1.5"
          >
            Support
          </a>
        )}
      </div>
    </div>
  );
}

export default function NetworkFilter({ members }: NetworkFilterProps) {
  const [selectedStages, setSelectedStages] = useState<Set<Stage>>(new Set());
  const [selectedType, setSelectedType] = useState<NetworkMemberType | 'all'>('all');
  const [selectedEducationLevel, setSelectedEducationLevel] = useState<EducationLevel | 'all'>('all');

  const allStages: Stage[] = ['nursery', 'gymnasium', 'poetic', 'spiritual'];
  const allEducationLevels: EducationLevel[] = ['grade-school', 'middle-school', 'high-school', 'college'];
  
  const typeOptions: { value: NetworkMemberType | 'all'; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'school', label: 'Schools' },
    { value: 'program', label: 'Programs' },
  ];

  const toggleStage = (stage: Stage) => {
    const newSelected = new Set(selectedStages);
    if (newSelected.has(stage)) {
      newSelected.delete(stage);
    } else {
      newSelected.add(stage);
    }
    setSelectedStages(newSelected);
  };

  const filteredMembers = members
    .filter((member) => {
      // Type filter
      if (selectedType !== 'all' && member.type !== selectedType) {
        return false;
      }
      // Education level filter
      if (selectedEducationLevel !== 'all' && !member.educationLevels.includes(selectedEducationLevel)) {
        return false;
      }
      // Stage filter (OR logic within stages)
      if (selectedStages.size === 0) return true;
      return member.stages.some((stage) => selectedStages.has(stage));
    })
    .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically

  const schoolCount = filteredMembers.filter((m) => m.type === 'school').length;
  const programCount = filteredMembers.filter((m) => m.type === 'program').length;

  const clearAllFilters = () => {
    setSelectedStages(new Set());
    setSelectedType('all');
    setSelectedEducationLevel('all');
  };

  return (
    <>
      {/* Filter Controls */}
      <div className="section-container py-section-sm bg-parchment-dark">
        {/* Filters Row */}
        <div className="flex flex-wrap items-start gap-8 mb-6">
          {/* Type Filter */}
          <div>
            <h2 className="text-body-sm font-lato font-semibold text-charcoal/70 uppercase tracking-wide mb-2">
              Type
            </h2>
            <div className="flex gap-1" role="group" aria-label="Filter by organization type">
              {typeOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSelectedType(option.value)}
                  className={`px-3 py-1.5 font-lato text-sm transition-all duration-200 focus-visible-ring border ${
                    selectedType === option.value
                      ? 'bg-forest text-parchment border-forest'
                      : 'bg-parchment text-charcoal border-charcoal/20 hover:border-forest/50'
                  } ${option.value === 'all' ? 'rounded-l-md' : ''} ${option.value === 'program' ? 'rounded-r-md' : ''}`}
                  aria-pressed={selectedType === option.value}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Education Level Filter */}
          <div>
            <h2 className="text-body-sm font-lato font-semibold text-charcoal/70 uppercase tracking-wide mb-2">
              Education Level
            </h2>
            <div className="flex gap-1" role="group" aria-label="Filter by education level">
              <button
                onClick={() => setSelectedEducationLevel('all')}
                className={`px-3 py-1.5 rounded-l-md font-lato text-sm transition-all duration-200 focus-visible-ring border ${
                  selectedEducationLevel === 'all'
                    ? 'bg-forest text-parchment border-forest'
                    : 'bg-parchment text-charcoal border-charcoal/20 hover:border-forest/50'
                }`}
                aria-pressed={selectedEducationLevel === 'all'}
              >
                All
              </button>
              {allEducationLevels.map((level, idx) => (
                <button
                  key={level}
                  onClick={() => setSelectedEducationLevel(level)}
                  className={`px-3 py-1.5 font-lato text-sm transition-all duration-200 focus-visible-ring border ${
                    selectedEducationLevel === level
                      ? 'bg-forest text-parchment border-forest'
                      : 'bg-parchment text-charcoal border-charcoal/20 hover:border-forest/50'
                  } ${idx === allEducationLevels.length - 1 ? 'rounded-r-md' : ''}`}
                  aria-pressed={selectedEducationLevel === level}
                >
                  {EDUCATION_LEVEL_METADATA[level].shortLabel}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stage Filter - 2x2 Grid */}
        <div className="mb-4">
          <h2 className="text-body-sm font-lato font-semibold text-charcoal/70 uppercase tracking-wide mb-2">
            Developmental Stage
          </h2>
          <div className="grid grid-cols-2 gap-2 w-fit" role="group" aria-label="Filter by stage">
            {allStages.map((stage) => (
              <button
                key={stage}
                onClick={() => toggleStage(stage)}
                className={`w-40 transition-all duration-200 ${
                  selectedStages.has(stage)
                    ? 'ring-2 ring-gold ring-offset-2 ring-offset-parchment-dark'
                    : 'opacity-80 hover:opacity-100'
                } focus-visible-ring rounded-md`}
                aria-pressed={selectedStages.has(stage)}
                aria-label={`Filter by ${stage} stage`}
              >
                <StageBadge stage={stage} size="md" className="w-full justify-center" />
              </button>
            ))}
          </div>
        </div>

        {/* Results Count (ARIA Live Region) */}
        <div
          className="mt-4 text-body-sm text-charcoal/60"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          {selectedStages.size === 0 && selectedType === 'all' && selectedEducationLevel === 'all' ? (
            <p>Showing all {members.length} organizations ({schoolCount} schools, {programCount} programs)</p>
          ) : (
            <p>
              Showing {filteredMembers.length} of {members.length} organizations
              {filteredMembers.length > 0 && ` (${schoolCount} schools, ${programCount} programs)`}
              {filteredMembers.length === 0 && ' — try different filters'}
            </p>
          )}
        </div>
      </div>

      {/* Listings */}
      <section className="section-container py-section">
        {filteredMembers.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-body-lg text-charcoal/70 mb-6">
              No schools or programs match your selected filters. Try adjusting your
              criteria or exploring all organizations.
            </p>
            <button
              onClick={clearAllFilters}
              className="btn-outline"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        )}

        {/* Founding CTA */}
        <div className="mt-12 p-8 bg-gold/10 rounded-organic">
          <h3 className="text-heading-3 font-playfair text-forest mb-4 text-center">
            Don't See a School or Program Near You?
          </h3>
          <p className="text-body text-center mb-6 max-w-2xl mx-auto leading-relaxed">
            The gymnasium stage (ages 7-13) is sorely lacking in modern
            education. Consider starting a school or program to restore this vital phase of
            formation.
          </p>
          <div className="text-center">
            <CTAButton href="/philosophy#resources" variant="primary" size="lg">
              Explore Founding Resources
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
