'use client';

import { useState } from 'react';
import StageBadge from './StageBadge';
import CTAButton from './CTAButton';
import type { Stage } from '@/lib/types/content';

export interface School {
  id: string;
  name: string;
  location: string;
  stages: readonly Stage[];
  type: string;
  description: string;
}

interface SchoolsFilterProps {
  schools: School[];
}

export default function SchoolsFilter({ schools }: SchoolsFilterProps) {
  const [selectedStages, setSelectedStages] = useState<Set<Stage>>(new Set());

  const allStages: Stage[] = ['nursery', 'gymnasium', 'poetic', 'spiritual'];

  const toggleStage = (stage: Stage) => {
    const newSelected = new Set(selectedStages);
    if (newSelected.has(stage)) {
      newSelected.delete(stage);
    } else {
      newSelected.add(stage);
    }
    setSelectedStages(newSelected);
  };

  const filteredSchools = schools.filter((school) => {
    if (selectedStages.size === 0) return true;
    return school.stages.some((stage) => selectedStages.has(stage));
  });

  return (
    <>
      {/* Filter Controls */}
      <div className="section-container py-section-sm bg-parchment-dark">
        <div className="mb-4">
          <h2 className="text-heading-2 font-playfair text-forest mb-4">
            Filter by Stage Focus
          </h2>
          <p className="text-body text-charcoal/70 mb-6">
            Discover schools by their developmental stage emphasis. Click badges
            to filter (non-prescriptive discovery aid).
          </p>
          <div className="flex flex-wrap gap-3" role="group" aria-label="Filter schools by stage">
            {allStages.map((stage) => (
              <button
                key={stage}
                onClick={() => toggleStage(stage)}
                className={`transition-all duration-200 ${
                  selectedStages.has(stage)
                    ? 'ring-2 ring-gold ring-offset-2 ring-offset-parchment-dark'
                    : 'opacity-60 hover:opacity-100'
                } focus-visible-ring`}
                aria-pressed={selectedStages.has(stage)}
                aria-label={`Filter by ${stage} stage`}
              >
                <StageBadge stage={stage} size="md" />
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
          {selectedStages.size === 0 ? (
            <p>Showing all {schools.length} schools</p>
          ) : (
            <p>
              Showing {filteredSchools.length} of {schools.length} schools
              {filteredSchools.length === 0 && ' (try different filters)'}
            </p>
          )}
        </div>
      </div>

      {/* School Listings */}
      <section className="section-container py-section">
        {filteredSchools.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-body-lg text-charcoal/70 mb-6">
              No schools match your selected filters. Try adjusting your
              criteria or exploring all schools.
            </p>
            <button
              onClick={() => setSelectedStages(new Set())}
              className="btn-outline"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8">
            {filteredSchools.map((school) => (
              <div key={school.id} className="card-elevated">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-heading-3 font-playfair text-forest mb-2">
                      {school.name}
                    </h3>
                    <p className="text-body-sm text-charcoal/70">
                      {school.location} • {school.type}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {school.stages.map((stage) => (
                      <StageBadge key={stage} stage={stage} size="sm" />
                    ))}
                  </div>
                </div>
                <p className="text-body leading-relaxed mb-6">
                  {school.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <CTAButton href="#" variant="primary" size="md">
                    Inquire About Enrollment
                  </CTAButton>
                  <CTAButton href="#" variant="outline" size="md">
                    View School Details
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Founding CTA */}
        <div className="mt-12 p-8 bg-gold/10 rounded-organic">
          <h3 className="text-heading-3 font-playfair text-forest mb-4 text-center">
            Don't See a School Near You?
          </h3>
          <p className="text-body text-center mb-6 max-w-2xl mx-auto leading-relaxed">
            The gymnasium stage (ages 7-13) is sorely lacking in modern
            education. Consider starting a school to restore this vital phase of
            formation.
          </p>
          <div className="text-center">
            <CTAButton href="/join-found" variant="primary" size="lg">
              Explore Founding Resources
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
